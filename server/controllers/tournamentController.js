const { Tournament, User, TournamentTeam, Team } = require("../models/model");
const uuid = require("uuid");
const path = require("path");
const ApiError = require("../error/ApiError");
const teamController = require("../controllers/teamController");

class TournamentController {
  async create(req, res, next) {
    try {
      let { name, description, date, size, prize, gameId, userId } = req.body;
      gameId = Number(gameId);
      const { logo } = req.files;
      let fileName = uuid.v4() + ".jpg";
      const tournament = await Tournament.create({
        name,
        logo: fileName,
        description,
        date,
        size,
        prize,
        gameId,
        userId,
      });
      logo.mv(path.resolve(__dirname, "..", "static", fileName));
      return res.json(tournament);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAllTournaments(req, res) {
    try {
      let { limit, page } = req.query;
      page = page || 1;
      limit = limit || 9;
      let offset = page * limit - limit;
      const tournament = await Tournament.findAndCountAll({ limit, offset });
      return res.json(tournament);
    } catch (error) {
      res.json({ message: error });
    }
  }

  async getOneTournament(req, res) {
    const { id } = req.params;
    const tournament = await Tournament.findOne({
      where: { id },
    });
    return res.json(tournament);
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      Tournament.destroy({
        where: { id },
      });
      res.json({ message: "Турнир был удалена" });
    } catch (error) {
      next(ApiError.badRequest(`Произошла непредвиденная ошибка: ${error}`));
    }
  }

  async getAllTournamentMembers(req, res) {
    try {
      const { tournamentId } = req.params;
      const data = await TournamentTeam.findAll({ where: { tournamentId } });

      if (data !== null) {
        const teams = await Promise.all(
          data.map(async (team) => {
            console.log(team.teamId);
            const teamDetails = await Team.findOne({
              where: { id: team.teamId },
            });
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

  async joinTournament(req, res) {
    try {
      const { tournamentId, teamId } = req.body;
      await TournamentTeam.create({ tournamentId, teamId });
      return res.json(true);
    } catch (e) {
      return res.json({ message: e });
    }
  }
}

module.exports = new TournamentController();
