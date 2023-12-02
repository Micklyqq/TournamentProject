const Router = require('express');
const router = new Router();
const  notificationController= require('../controllers/notificationController')
const authMiddleware = require("../middleware/authMiddleware")

router.post('/team',authMiddleware,notificationController.createTeamNotification);
router.get('/team/all/:teamId',authMiddleware,notificationController.getAllTeamNotification);
router.get('/team',authMiddleware,notificationController.getOneTeamNotification);
router.delete('/team/delete/:id',authMiddleware,notificationController.deleteTeamNotification);
router.post('/tournament',authMiddleware,notificationController.createTournamentNotification);
router.get('/tournament',authMiddleware,notificationController.getOneTournamentNotification);
router.get('/tournament/all/:tournamentId',authMiddleware,notificationController.getAllTournamentNotification);
router.delete('/tournament/delete/:id',authMiddleware,notificationController.deleteTournamentNotification);

module.exports = router;