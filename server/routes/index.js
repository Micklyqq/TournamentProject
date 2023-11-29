const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const matchRouter = require('./matchRouter');
const teamRouter = require('./teamRouter');
const tournamentRouter = require('./tournamentRouter');
const gameRouter = require('./gameRouter');
const roleRouter = require('./roleRouter');
const notificationRouter = require('./notificationRouter')



router.use('/user',userRouter);
router.use('/match',matchRouter);
router.use('/team',teamRouter);
router.use('/tournament',tournamentRouter);
router.use('/game',gameRouter);
router.use('/match',matchRouter);
router.use('/role',roleRouter);
router.use('/notification',notificationRouter);
module.exports = router;