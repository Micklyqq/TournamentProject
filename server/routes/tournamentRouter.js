const Router = require('express');
const router = new Router();
const tournamentController = require('../controllers/tournamentController')
const authMiddleware = require("../middleware/authMiddleware")

router.post('/',tournamentController.create)
router.get('/',tournamentController.getAll)
router.get('/:id',tournamentController.getOne)
router.delete('/:id',tournamentController.delete)
module.exports = router;