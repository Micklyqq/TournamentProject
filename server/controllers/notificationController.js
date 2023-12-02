const ApiError = require("../error/ApiError")
const {TeamNotification, TournamentNotification} = require("../models/model");
const uuid = require('uuid');
const path = require("path");

class NotificationController {
    async createTeamNotification(req, res) {
      try{
          const {userId, teamId} = req.body;
          const notification = await TeamNotification.create({
              userId, teamId
          })
          return res.json(notification);
      }
      catch (e) {
          return res.json({message:e})
      }
    }

    async getOneTeamNotification(req, res) {
        try{
            const {teamId,userId} = req.query;
            console.log(userId+" "+teamId)
            const notification = await TeamNotification.findOne({
                where:{userId,teamId}
            })
            console.log({notification});
            return res.json(notification);
        }
        catch (e) {
            return res.json({message:e})
        }
    }

    async getAllTeamNotification(req, res) {
        try{
            const {teamId} = req.params;
            const notification = await TeamNotification.findAll({
                where:{teamId}
            })
            console.log({notification});
            return res.json(notification);
        }
        catch (e) {
            return res.json({message:e})
        }
    }

    async deleteTeamNotification(req, res) {
        try{
            const {id} = req.params;

            const notification = await TeamNotification.destroy({
                where:{id}
            })
            return res.json(notification);
        }
        catch (e) {
            return res.json({message:e})
        }
    }


    async createTournamentNotification(req, res) {
        try{
            const {tournamentId, teamId} = req.body;
            const notification = await TournamentNotification.create({
                tournamentId, teamId
            })
            return res.json(notification);
        }
        catch (e) {
            return res.json({message:e})
        }
    }

    async getOneTournamentNotification(req, res) {
        try{
            const {tournamentId,teamId} = req.query;
            console.log(tournamentId+" "+teamId)
            const notification = await TournamentNotification.findOne({
                where:{tournamentId,teamId}
            })
            console.log({notification});
            return res.json(notification);
        }
        catch (e) {
            return res.json({message:e})
        }
    }

    async getAllTournamentNotification(req, res) {
        try{
            const {tournamentId} = req.params;
            const notification = await TournamentNotification.findAll({
                where:{tournamentId}
            })
            console.log({notification});
            return res.json(notification);
        }
        catch (e) {
            return res.json({message:e})
        }
    }

    async deleteTournamentNotification(req, res) {
        try{
            const {id} = req.params;

            const notification = await TournamentNotification.destroy({
                where:{id}
            })
            return res.json(notification);
        }
        catch (e) {
            return res.json({message:e})
        }
    }


}

module.exports = new NotificationController();