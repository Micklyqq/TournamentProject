const ApiError = require("../error/ApiError")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User,UserRole,Role,Team,Tournament } = require("../models/model");
const uuid = require('uuid');
const path = require("path");
const fs = require('fs');


const generateJwt = (id,email,roleId,teamOwner,tournamentOwner,logo,userName,teamId)=>{
    try {
        const payload = {
            id,
            email,
            roleId,
            teamOwner,
            tournamentOwner,
            logo,
            userName,
            teamId,
        };

        const token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: "24h",
        });


        return token;
    } catch (error) {
        console.error("Error generating token:", error);
        throw error;
    }
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
        const token = generateJwt(user.id,user.email,createDefaultRole.roleId,null,null,null,null);
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
    const token = generateJwt(user.id,user.email,roles,(teamOwner?teamOwner.id:null),(tournamentOwner?tournamentOwner.id:null),user.logo,user.userName,user.teamId);
    return res.json({token});
    }

    async check(req,res,next){
        try{
            const teamOwner = await Team.findOne({where:{userId:req.user.id}})
            const tournamentOwner = await Tournament.findOne({where:{userId:req.user.id}})
            const token = generateJwt(req.user.id,req.user.email,req.user.roleId,(teamOwner?teamOwner.id:null),(tournamentOwner?tournamentOwner.id:null),req.user.logo,req.user.userName,req.user.teamId);
            return res.json({token});
        }
        catch (e){
            res.json({message:e})
        }

    }

    async delete(req,res,next){
        const {id} = req.params;
        const userDestroy = User.destroy({
            where:{id}
        })
        return res.json(userDestroy);
    }

    async getUserInfo(req,res,next){
        const {id} = req.params;
        const user = await User.findOne({where: {id}});

        return res.json(user);
    }

    async userUpdate(req,res,next){

       try {
           let {id,userName} = req.body;
           let logo;
           let fileName = uuid.v4()+".jpg";
           let user;
           user = await User.findOne({where:{id}});

           /*const oldLogo = path.join(__dirname,'..','static',user.logo);
           try {
               fs.accessSync(oldLogo);
               fs.unlinkSync(oldLogo);
           } catch (error) {
               console.log('Error deleting file:', error);
           }*/

           if(req.files===null){
               logo=null;
           }
           else{
               logo = req.files.logo;
           }

           if(userName==="null" || userName===null){
               userName=null;
           }
           if(userName && logo===null){
               await User.update({userName},{where: {id}}).catch(error => console.error('Update error:', error));

           }
           else if(userName===null && logo){
               await User.update({logo:fileName},{where: {id}}).catch(error => console.error('Update error:', error));
               await logo.mv(path.resolve(__dirname,'..','static',fileName));

           }
           else if(userName && logo){
               await User.update({userName,logo:fileName},{where: {id}}).catch(error => console.error('Update error:', error));
               await logo.mv(path.resolve(__dirname,'..','static',fileName));

           }

           user = await User.findOne({where:{id}});

           const userRole = await UserRole.findAll({where:{userId:user.id}});
           const roles = findAllRoles(userRole);
           const teamOwner = await Team.findOne({where:{userId:user.id}});
           const tournamentOwner = await Tournament.findOne({where:{userId:user.id}})
           const token = generateJwt(user.id,user.email,roles,(teamOwner?teamOwner.id:null),(tournamentOwner?tournamentOwner.id:null),user.logo,user.userName,user.teamId)



           return res.json({token});
       }
       catch (e) {
           res.json({message:e})
       }

    }
}

module.exports = new UserController();