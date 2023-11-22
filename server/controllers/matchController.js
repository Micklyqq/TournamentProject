
const ApiError = require("../error/ApiError")
const {Match, Game} = require("../models/model");
class MatchController{
    async create(req,res){
        const {time,date,tournament_id} = req.body;
        const match = await Match.create({time,date,tournament_id});
        return res.json(match);
    }

    async getAll(req,res){
        const matches = await Match.findAll();
        return res.json(matches);
    }

    async getOne(req,res){
        const {id} = req.params;
        const match = await Match.findOne({
            where:{id},
        });
        return res.json(match);

    }

    async update(req,res){
     const {id,result} = req.body;
     const match = await Match.update({result},{where: {id}});
     return res.json(match);
    }


}

module.exports = new MatchController();