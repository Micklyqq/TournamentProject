const {Tournament, User, TournamentTeam, Team} = require("../models/model");
const uuid = require('uuid');
const path = require("path");
const ApiError = require('../error/ApiError')
const teamController = require('../controllers/teamController')

class TournamentController{
    async create(req,res,next){

       try {
           let {name,description,date,size,prize,gameId,userId} = req.body;
           gameId = Number(gameId);
          const {logo} = req.files;
           let fileName = uuid.v4()+".jpg";
           const tournament = await Tournament.create({name,logo:fileName,description,date,size,prize,gameId,userId});
          logo.mv(path.resolve(__dirname,'..','static',fileName));
           return res.json(tournament);
       }
    catch (e) {
        next(ApiError.badRequest(e.message));
    }

    }

    async getAllTournaments(req,res){
        const tournament = await Tournament.findAll();
        return res.json(tournament);

    }

    async getOneTournament(req,res){
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

    async getAllTournamentMembers(req, res) {
        try {
            const { tournamentId } = req.params;
            const data = await TournamentTeam.findAll({ where: { tournamentId } });

            if (data !== null) {
                const teams = await Promise.all(
                    data.map(async (team) => {
                        console.log(team.teamId);
                        const teamDetails = await Team.findOne({where:{id:team.teamId}})
                        return {
                            id: teamDetails.id,
                            logo: teamDetails.logo,
                            name: teamDetails.name,
                        };
                    })
                );
                

                return res.json(teams);
            } else {
                return res.json(null);
            }
        } catch (e) {
            return res.json({ message: e.message });
        }
    }

    async joinTournament(req,res){
        try{
            const {tournamentId,teamId} = req.body;
            await TournamentTeam.create({tournamentId,teamId});
            return res.json(true)
        }
        catch (e) {
            return res.json({message:e});
        }

    }

}

module.exports = new TournamentController();