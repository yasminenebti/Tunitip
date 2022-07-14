const router = require("express").Router();
const categoryRoutes = require("../controllers/category.controller");

router.post("/", categoryRoutes.createCategory);
router.get("/", categoryRoutes.getCategories);
module.exports = router;
