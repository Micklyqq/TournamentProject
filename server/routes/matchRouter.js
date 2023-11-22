const Router = require('express');
const router = new Router();
const matchController = require('../controllers/matchController')

router.post('/',matchController.create)
router.get('/',matchController.getAll)
router.get('/:id',matchController.getOne)
router.put("/",matchController.update)

module.exports = router;