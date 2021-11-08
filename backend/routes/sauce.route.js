const express = require("express");
const router = express.Router();

const sauceCtrl = require("../controllers/sauce.controller");
const auth = require("../middleware/auth.middleware");
const multer = require("../middleware/multer-config.middleware");

router.post("/", auth, multer, sauceCtrl.createSauce);
router.put("/:id", auth, multer, sauceCtrl.modifySauce);
router.post("/:id/like", auth, sauceCtrl.likeAndDislike);
router.delete("/:id", auth, sauceCtrl.deleteSauce);
router.get("/", auth, sauceCtrl.getAllSauces);
router.get("/:id", auth, sauceCtrl.getOneSauce);

module.exports = router;
