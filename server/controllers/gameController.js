const ApiError = require("../error/ApiError")
const {Game} = require("../models/model");
const uuid = require('uuid');
const path = require("path");
class GameController{
    async create(req,res,next){

       try {
           const {name} = req.body;
           const {logo} = req.files
           let fileName = uuid.v4()+".jpg";

           const game = await Game.create({name,logo:fileName});
           logo.mv(path.resolve(__dirname,'..','static',fileName));
           return res.json(game);
       }
       catch (e) {
           next(ApiError.badRequest(e.message));
       }


    }

    async getAll(req,res){
        const games = await Game.findAll();
        return res.json(games);

    }

    async getOne(req,res){
        const {id} = req.params;
        const game = await Game.findOne({
            where:{id},
        });
        return res.json(game);

    }

    async delete(req,res){
        const {id} = req.params;
        const gameDestroy = Game.destroy({
            where:{id}
        })
        return res.json(gameDestroy);
    }
}

module.exports = new GameController();