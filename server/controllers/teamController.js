const ApiError = require("../error/ApiError");
const {
  Team,
  TeamNotification,
  User,
  UserRole,
  Tournament,
  Role,
} = require("../models/model");
const uuid = require("uuid");
const path = require("path");

class TeamController {
  async create(req, res, next) {
    try {
      const { name, description, userId } = req.body;
      const { logo } = req.files;
      let fileName = uuid.v4() + ".jpg";

      const team = await Team.create({
        name,
        logo: fileName,
        description,
        userId,
      });
      logo.mv(path.resolve(__dirname, "..", "static", fileName));
      return res.json(team);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAllTeams(req, res) {
    let { limit, page } = req.query;
    page = page || 1;
    limit = limit || 9;
    let offset = page * limit - limit;
    const teams = await Team.findAndCountAll({ limit, offset });
    return res.json(teams);
  }

  async getOneTeam(req, res) {
    const { id } = req.params;
    const team = await Team.findOne({
      where: { id },
    });
    return res.json(team);
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const user = req.user;
      const admin = await Role.findOne({ where: { name: "ADMIN" } });
      const isAdmin = user.roleId.includes(admin.id);

      if (user.teamId === id || isAdmin) {
        Team.destroy({
          where: { id },
        });
        res.json({ message: "Команда была удалена" });
      } else {
        next(ApiError.forbidden("Отказано в доступе"));
      }
    } catch (error) {
      next(ApiError.badRequest(`Произошла непредвиденная ошибка: ${error}`));
    }
  }

  async update(req, res) {
    try {
      let { id, name } = req.body;
      let logo;
      let fileName = uuid.v4() + ".jpg";

      let team;
      team = await Team.findOne({ where: { id } });

      /*const oldLogo = path.join(__dirname,'..','static',user.logo);
            try {
                fs.accessSync(oldLogo);
                fs.unlinkSync(oldLogo);
            } catch (error) {
                console.log('Error deleting file:', error);
            }*/

      if (req.files === null) {
        logo = null;
      } else {
        logo = req.files.logo;
      }
      console.log("ТИП ИМЕНИ: " + typeof name);
      if (name === "null" || name === null) {
        name = team.name;
      }
      if (name && logo === null) {
        await Team.update({ name }, { where: { id } }).catch((error) =>
          console.error("Update error:", error)
        );
      } else if (name === "null" && logo) {
        await Team.update({ logo: fileName }, { where: { id } }).catch(
          (error) => console.error("Update error:", error)
        );
        await logo.mv(path.resolve(__dirname, "..", "static", fileName));
      } else if (name && logo) {
        await Team.update({ name, logo: fileName }, { where: { id } }).catch(
          (error) => console.error("Update error:", error)
        );
        await logo.mv(path.resolve(__dirname, "..", "static", fileName));
      }

      team = await Team.findOne({ where: { id } });

      return res.json(team);
    } catch (e) {
      res.json({ message: e });
    }
  }

  async joinTeam(req, res) {
    try {
      const { userId, teamId } = req.body;
      const user = await User.update({ teamId }, { where: { id: userId } });
      return res.json(true);
    } catch (e) {
      return res.json({ message: e });
    }
  }

  async getAllTeammates(req, res) {
    try {
      const { teamId } = req.params;
      const users = await User.findAll({ where: { teamId } });

      const simplifiedUsers = users.map((user) => ({
        id: user.id,
        logo: user.logo,
        userName: user.userName,
      }));

      return res.json(simplifiedUsers);
    } catch (e) {
      return res.json({ message: e.message });
    }
  }
}

module.exports = new TeamController();
