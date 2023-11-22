const ApiError = require("../error/ApiError")
const {Team} = require("../models/model");
const uuid = require('uuid');
const path = require("path");

class TeamController{
    async create(req,res,next){

           try {
               const {name,description} = req.body;
               const {logo} = req.files
               let fileName = uuid.v4()+".jpg";

               const team = await Team.create({name,logo:fileName,description});
               logo.mv(path.resolve(__dirname,'..','static',fileName));
               return res.json(team);
           }
           catch (e) {
               next(ApiError.badRequest(e.message));
           }


    }

    async getAll(req,res){
        const teams = await Team.findAll();
        return res.json(teams);

    }

    async getOne(req,res){
    const {id} = req.params;
    const team = await Team.findOne({
        where:{id},
    });
    return res.json(team);

    }

    async delete(req,res){
        const {id} = req.params;
        const teamDestroy = Team.destroy({
            where:{id}
        })
        return res.json(teamDestroy);
    }
}

module.exports = new TeamController();