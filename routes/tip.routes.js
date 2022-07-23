const router = require("express").Router();
const tipRoutes = require("../controllers/tip.controller");
const verifyToken = require("../middlewares/verifyToken");
const isHost = require("../middlewares/isHost");

router.get("/", tipRoutes.getTips);
router.post("/", verifyToken, isHost, tipRoutes.createTip);
router.get("/search", tipRoutes.searchTip);
router.post("/:id", tipRoutes.getTip);
router.put("/:id", verifyToken, isHost, tipRoutes.updateTip);

module.exports = router;
