const ApiError = require("../error/ApiError")
const {TeamNotification} = require("../models/model");
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

    async getOneNotification(req, res) {
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

    async getAllNotification(req, res) {
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

    async deleteNotification(req, res) {
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



}

module.exports = new NotificationController();