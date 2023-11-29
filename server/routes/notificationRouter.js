const Router = require('express');
const router = new Router();
const  notificationController= require('../controllers/notificationController')
const authMiddleware = require("../middleware/authMiddleware")

router.post('/team',authMiddleware,notificationController.createTeamNotification);
router.get('/team/all/:teamId',authMiddleware,notificationController.getAllNotification);
router.get('/team',authMiddleware,notificationController.getOneNotification);
router.delete('/team/delete/:id',authMiddleware,notificationController.deleteNotification);

module.exports = router;