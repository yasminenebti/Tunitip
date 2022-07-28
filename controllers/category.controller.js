const Category = require("../models/category");
const getCategories = async (req, res) => {
  try {
    const categories = await Category.find().sort("-createdAt");
    return res.status(200).json({ categories: categories });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const createCategory = async (req, res) => {
  const newCategory = new Category({
    name: req.body.name,
  });
  try {
    const savedCategory = await newCategory.save();
    return res.status(201).json({ category: savedCategory });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteCategory = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedCategory = await Category.findByIdAndDelete(id);
    return res.status(200).json({ Category: deletedCategory });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports.createCategory = createCategory;
module.exports.getCategories = getCategories;
module.exports.deleteCategory = deleteCategory;
