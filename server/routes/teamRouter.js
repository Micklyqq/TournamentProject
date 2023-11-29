const Router = require('express');
const router = new Router();
const teamController = require('../controllers/teamController')
const authMiddleware = require("../middleware/authMiddleware");

router.post('/',teamController.create)
router.get('/',teamController.getAll)
router.get('/:id',teamController.getOne)
router.delete('/:id',teamController.delete)
router.put('/',teamController.update)
router.put('/join',authMiddleware,teamController.joinTeam)
router.get('/teammates/:teamId',teamController.getAllTeammates)
module.exports = router;