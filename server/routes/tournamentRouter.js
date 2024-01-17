const Router = require("express");
const router = new Router();
const tournamentController = require("../controllers/tournamentController");
const authMiddleware = require("../middleware/authMiddleware");
const teamController = require("../controllers/teamController");
const checkRoleMiddleware = require("../middleware/checkRoleMiddleware");

router.post("/", tournamentController.create);
router.get("/", tournamentController.getAllTournaments);
router.get("/:id", tournamentController.getOneTournament);
router.delete(
  "/:id",
  checkRoleMiddleware("ADMIN"),
  tournamentController.delete
);
router.get(
  "/members/:tournamentId",
  tournamentController.getAllTournamentMembers
);
router.post("/join", authMiddleware, tournamentController.joinTournament);
module.exports = router;
