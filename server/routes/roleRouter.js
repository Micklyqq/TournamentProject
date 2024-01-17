const Router = require("express");
const router = new Router();
const roleController = require("../controllers/roleController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole("ADMIN"), roleController.create);
router.get("/", roleController.getAll);
router.get("/:id", roleController.getOne);
router.delete("/:id", checkRole("ADMIN"), roleController.delete);
router.post("/giverole", checkRole("ADMIN"), roleController.addUserRole);
module.exports = router;
