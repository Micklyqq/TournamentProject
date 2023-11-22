const Router = require('express');
const router = new Router();
const roleController = require('../controllers/roleController')
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/',checkRole(4),roleController.create)
router.get('/',roleController.getAll)
router.get('/:id',roleController.getOne)
router.delete('/:id',checkRole(4),roleController.delete)
router.post('/giverole',checkRole(4),roleController.addUserRole)
module.exports = router;