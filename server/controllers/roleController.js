const {Role,UserRole} = require("../models/model");
const uuid = require('uuid');
const path = require("path");
const ApiError = require('../error/ApiError')

class RoleController{
    async create(req,res,next){

        try {
            const {name} = req.body;


            const role = await Role.create({name});

            return res.json(role);
        }
        catch (e) {
            next(ApiError.badRequest(e.message));
        }

    }

    async getAll(req,res){
        const role = await Role.findAll();
        return res.json(role);

    }

    async getOne(req,res){
        const {id} = req.params;
        const role = await Role.findOne({
            where:{id},
        });
        return res.json(role);

    }

    async delete(req,res){
        const {id} = req.params;
        const roleDestroy = Role.destroy({
            where:{id}
        })
        return res.json(roleDestroy);
    }

    async addUserRole(req,res){
        const {userId,roleId} = req.body;
        const addRole = UserRole.create({userId,roleId});
        return res.json(addRole);

    }
}

module.exports = new RoleController();