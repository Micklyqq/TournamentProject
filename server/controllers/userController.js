const ApiError = require("../error/ApiError")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User,UserRole,Role,Team,Tournament } = require("../models/model");
const uuid = require('uuid');
const path = require("path");
const fs = require('fs');


const generateJwt = (id,email,roleId,teamOwner,tournamentOwner)=>{
    return jwt.sign({id,email,roleId,teamOwner,tournamentOwner},process.env.SECRET_KEY,{
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
    const teamOwner = await Team.findOne({where:{userId:user.id}});
    const tournamentOwner = await Tournament.findOne({where:{userId:user.id}})
    const token = generateJwt(user.id,user.email,roles,(teamOwner?teamOwner.id:null),(tournamentOwner?tournamentOwner.id:null));
    return res.json({token});
    }

    async check(req,res,next){

    const token = generateJwt(req.user.id,req.user.email,req.user.roleId,req.user.teamOwner,req.user.tournamentOwner);
    return res.json({token});
    }

    async delete(req,res,next){
        const {id} = req.params;
        const userDestroy = User.destroy({
            where:{id}
        })
        return res.json(userDestroy);
    }

    async profileGet(req,res,next){
        const {id} = req.body;
        const {userName,logo} = await User.findOne({where: {id}});

        return res.json({userName,logo});
    }

    async profilePost(req,res,next){

          const {id,userName} = req.body;
        const {logo} = req.files
        let fileName = uuid.v4()+".jpg";
          let user;
          user = await User.findOne({where:{id}});
          const oldLogo = path.join(__dirname,'..','static',user.logo);

        fs.unlinkSync (oldLogo)
          if(userName && !logo){
              user = await User.update({userName},{where: {id}});

          }
          else if(!userName && logo){
              user = await User.update({logo:fileName},{where: {id}});

          }
          else if(userName && logo){
              user = await User.update({userName,logo:fileName},{where: {id}});

          }
        logo.mv(path.resolve(__dirname,'..','static',fileName));
        return res.json(user);

    }
}

module.exports = new UserController();