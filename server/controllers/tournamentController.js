const {Tournament} = require("../models/model");
const uuid = require('uuid');
const path = require("path");
const ApiError = require('../error/ApiError')

class TournamentController{
    async create(req,res,next){

       try {
           const {name,description,date,time,prize,gameId} = req.body;
           const {logo} = req.files;
           let fileName = uuid.v4()+".jpg";
           const tournament = await Tournament.create({name,logo:fileName,description,date,time,prize,gameId});
           logo.mv(path.resolve(__dirname,'..','static',fileName));
           return res.json(tournament);
       }
    catch (e) {
        next(ApiError.badRequest(e.message));
    }

    }

    async getAll(req,res){
        const tournament = await Tournament.findAll();
        return res.json(tournament);

    }

    async getOne(req,res){
        const {id} = req.params;
        const tournament = await Tournament.findOne({
            where:{id},
        });
        return res.json(tournament);

    }

    async delete(req,res){
        const {id} = req.params;
        const tournamentDestroy = Tournament.destroy({
            where:{id}
        })
        return res.json(tournamentDestroy);
    }
}

module.exports = new TournamentController();