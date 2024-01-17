const Router = require("express");
const router = new Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");
const validationMiddleware = require("../middleware/validationMiddleware");
const userScheme = require("../validations/user");
const checkRoleMiddleware = require("../middleware/checkRoleMiddleware");

router.post(
  "/registration",
  validationMiddleware(userScheme),
  userController.registration
);
router.post("/login", validationMiddleware(userScheme), userController.login);
router.get("/auth", authMiddleware, userController.check);
router.get("/profile/:id", userController.getUserInfo);
router.get("/", userController.getAllUsers);
router.put("/profile", authMiddleware, userController.userUpdate);
router.delete("/:id", checkRoleMiddleware("ADMIN"), userController.delete);
router.put("/teamleave", userController.teamLeave);
module.exports = router;
