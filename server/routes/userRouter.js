const Router = require('express');
const router = new Router();
const userController = require("../controllers/userController")
const authMiddleware = require("../middleware/authMiddleware")

router.post('/registration',userController.registration)
router.post('/login',userController.login)
router.get('/auth',authMiddleware,userController.check)
router.post('/profile/info',userController.profileGet)
router.post('/profile',authMiddleware,userController.profilePost)
router.delete('/:id',userController.delete)
module.exports = router;