const router = require("express").Router();
const tipRoutes = require("../controllers/tip.controller");
const verifyToken = require("../middlewares/verifyToken");
const isHost = require("../middlewares/isHost");

router.get("/", tipRoutes.getTips);
router.post("/", verifyToken, isHost, tipRoutes.createTip);
router.post("/search", tipRoutes.searchTip);
router.post("/:id", tipRoutes.getTip);

module.exports = router;
