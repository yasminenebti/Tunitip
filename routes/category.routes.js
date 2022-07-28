const router = require("express").Router();
const categoryRoutes = require("../controllers/category.controller");

router.post("/", categoryRoutes.createCategory);
router.get("/", categoryRoutes.getCategories);
router.delete("/:id", categoryRoutes.deleteCategory);
module.exports = router;
