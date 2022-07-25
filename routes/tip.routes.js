const router = require("express").Router();
const tipRoutes = require("../controllers/tip.controller");
const verifyToken = require("../middlewares/verifyToken");
const isHost = require("../middlewares/isHost");

router.get("/", tipRoutes.getTips);
router.post("/", verifyToken, isHost, tipRoutes.createTip);
router.get("/search", tipRoutes.searchTip);
router.get("/myTrips", verifyToken, isHost, tipRoutes.getTipsByUser);
router.get("/:id", tipRoutes.getTip);

router.put("/:id", verifyToken, isHost, tipRoutes.updateTip);
router.delete("/:id", verifyToken, isHost, tipRoutes.deleteTip);

module.exports = router;
