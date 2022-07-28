const router = require("express").Router();
const multer = require("multer");
const tipRoutes = require("../controllers/tip.controller");
const verifyToken = require("../middlewares/verifyToken");
const isHost = require("../middlewares/isHost");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get("/", tipRoutes.getTips);
router.post(
  "/",
  upload.single("image"),
  verifyToken,
  isHost,
  tipRoutes.createTip
);
router.get("/search", tipRoutes.searchTip);
router.get("/myTrips", verifyToken, isHost, tipRoutes.getTipsByUser);
router.get("/:id", tipRoutes.getTip);

router.put(
  "/:id",
  upload.single("image"),
  verifyToken,
  isHost,
  tipRoutes.updateTip
);
router.delete("/:id", verifyToken, isHost, tipRoutes.deleteTip);

module.exports = router;
