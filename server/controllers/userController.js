const ApiError = require("../error/ApiError")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User,UserRole,Role } = require("../models/model");


const generateJwt = (id,email,roleId)=>{
    return jwt.sign({id,email,roleId},process.env.SECRET_KEY,{
        expiresIn:"24h",
    })
}

const findAllRoles = (roles)=>{
   return payload = {
       array:roles.map((arr)=>{
        return arr.roleId;
    })
   }

}

class UserController{
    async registration(req,res,next) {
        const {email, password} = req.body;
        if (!email || !password) {
            return next(ApiError.badRequest("Некорректный email или password!"));
        }
        const candidate = await User.findOne({ where: { email } });
        if(candidate){
            return  next(ApiError.badRequest("Пользователь с таким email уже существует!"));
        }
        const defaultRole = await Role.findOne({ where: { name:'USER' } });

        const hashPassword = await bcrypt.hash(password,5);
        const user = await User.create({email,password:hashPassword});
        const createDefaultRole = await UserRole.create({userId:user.id,roleId:defaultRole.id});
        const token = generateJwt(user.id,user.email,createDefaultRole.roleId);
        return res.json({token});

    }
    async login(req,res,next){
    const {email,password} = req.body;
    const user = await User.findOne({where: {email}});
    if(!user){
        return next(ApiError.badRequest("Пользователя с таким email не существует"))
    }

    let comparedPassword = bcrypt.compareSync(password,user.password);
    if(!comparedPassword){
        return next(ApiError.badRequest("Неверный пароль!"));
    }

    const userRole = await UserRole.findAll({where:{userId:user.id}});
    const roles = findAllRoles(userRole);
    const token = generateJwt(user.id,user.email,roles);
    return res.json({token});
    }

    async check(req,res,next){

    const token = generateJwt(req.user.id,req.user.email,req.user.roleId);
    return res.json({token});
    }

    async delete(req,res,next){
        const {id} = req.params;
        const userDestroy = User.destroy({
            where:{id}
        })
        return res.json(userDestroy);
    }
}

module.exports = new UserController();