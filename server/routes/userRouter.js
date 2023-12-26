const Router = require("express");
const router = new Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");
const validationMiddleware = require("../middleware/validationMiddleware");
const userScheme = require("../validations/user");

router.post(
  "/registration",
  validationMiddleware(userScheme),
  userController.registration
);
router.post("/login", validationMiddleware(userScheme), userController.login);
router.get("/auth", authMiddleware, userController.check);
router.get("/profile/:id", userController.getUserInfo);
router.put("/profile", authMiddleware, userController.userUpdate);
router.delete("/:id", userController.delete);
module.exports = router;
