const Tip = require("../models/tip");
const Category = require("../models/category");
const User = require("../models/user");
const createTip = async (req, res) => {
  const newTip = new Tip({
    name: req.body.name,
    place: req.body.place,
    description: req.body.description,
    image: req.protocol + "://" + req.hostname + ":5000" + "/" + req.file.path,

    price: req.body.price,
    review: req.body.review,
    rooms: req.body.rooms,
    beds: req.body.beds,
    baths: req.body.baths,
    host: req.verifiedUser.id,
    category: req.body.category,
  });
  try {
    const savedTip = await newTip.save();
    return res.status(201).json({ Tip: savedTip });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getTips = async (req, res) => {
  const limit = req.query.limit ? parseInt(req.query.limit) : null;
  try {
    let tips = [];
    tips = await Tip.find().limit(limit).sort("-createdAt").populate({
      path: "host",
      select: "phoneNumber firstName",
    });
    return res.status(200).json({ tips: tips });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getTipsByUser = async (req, res) => {
  try {
    const tips = await Tip.find({ host: req.verifiedUser.id });
    return res.status(200).json({ tips: tips });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const searchTip = async (req, res) => {
  const q = req.query.q ? req.query.q : "";
  const categoryQuery = req.query.category ? req.query.category : null;
  let category = null;

  if (categoryQuery) {
    category = await Category.findOne({ name: categoryQuery });
  }
  const query = {
    category: category,
    name: { $regex: `.*${q}.*` },
  };
  if (!query.category) {
    delete query["category"];
  }
  try {
    const tip = await Tip.find(query);
    return res.status(200).send({ Tip: tip });
  } catch (error) {
    res.status(500).json({ message: message.error });
  }
};

const getTip = async (req, res) => {
  const id = req.params.id;
  try {
    const tip = await Tip.findById(id);
    return res.status(200).json({ Tip: tip });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const updateTip = async (req, res) => {
  const id = req.params.id;
  const data = { ...req.body };
  if (req.file) {
    if (req.hostname === "localhost") {
      data.image =
        req.protocol + "://" + req.hostname + ":5000" + "/" + req.file.path;
    } else {
      imageUrl = req.protocol + "://" + req.hostname + "/" + req.file.path;
    }
  } else {
    delete data["image"];
  }
  try {
    const tip = await Tip.findById(id);
    if (tip.host.toString() === req.verifiedUser.id) {
      const updatedTip = await Tip.findByIdAndUpdate(id, data, { new: true });
      return res.status(200).json({ Tip: updatedTip });
    } else {
      return res.status(403).json({ message: "You're not the host" });
    }
  } catch (error) {
    res.status(500).json({ message: message.error });
  }
};

const deleteTip = async (req, res) => {
  const id = req.params.id;
  let deletedTip = null;

  try {
    const tip = await Tip.findById(id);
    if (tip.host.toString() === req.verifiedUser.id) {
      deletedTip = await Tip.findByIdAndDelete(id);
    }

    return res.status(200).json({ Tip: deletedTip });
  } catch (error) {
    res.status(500).json({ message: message.error });
  }
};

const getHostNumber = async (req, res) => {
  const hostId = req.params.hostId;
  try {
    const phoneNumber = await User.findById(hostId).select("phoneNumber");
    return res.status(200).json({ phoneNumber: phoneNumber });
  } catch (error) {
    res.status(500).json({ message: message.error });
  }
};

module.exports.createTip = createTip;
module.exports.getTip = getTip;
module.exports.getTips = getTips;
module.exports.searchTip = searchTip;
module.exports.updateTip = updateTip;
module.exports.getTipsByUser = getTipsByUser;
module.exports.deleteTip = deleteTip;
module.exports.getHostNumber = getHostNumber;
