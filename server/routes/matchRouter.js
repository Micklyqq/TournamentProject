const Router = require('express');
const router = new Router();
const matchController = require('../controllers/matchController')

router.post('/',matchController.create)
router.get('/:tournamentId',matchController.getAllMatchesForTournament)
//router.get('/:id',matchController.getOne)
router.put("/:matchId",matchController.updateResult)
router.post("/nextRound/:tournamentId",matchController.checkAndHandleNextRound)

module.exports = router;