const Tip = require("../models/tip");
const createTip = async (req, res) => {
  const newTip = new Tip({
    name: req.body.name,
    place: req.body.place,
    description: req.body.description,
    image: req.body.image,
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
    tips = await Tip.find().limit(limit).sort("-createdAt");
    return res.status(200).json({ tips: tips });
  } catch (error) {
    res.status(500).json({ message: message.error });
  }
};

const searchTip = async (req, res) => {
  const q = req.query.q ? req.query.q : "hello";
  try {
    const tip = await Tip.find({ name: { $regex: `.*${q}.*` } });
    return res.status(200).send({ Tip: tip });
  } catch (error) {
    res.status(500).json({ message: message.error });
  }
};
// const getTips = async (req, res) => {
//   const tips = await Tip.find();
//   try {
//     return res.status(200).json({ tips: tips });
//   } catch (error) {
//     res.status(500).json({ message: message.error });
//   }
// };
// const searchTip = async (req, res) => {
//   const q = req.query.q ? req.query.q : "";
//   try {
//     const tip = await Tip.find({ name: { $regex: `.*${q}.*` } });
//     return res.status(200).send({ Tip: tip });
//   } catch {
//     res.status(500).json({ message: message.error });
//   }
// };

const getTip = async (req, res) => {
  const id = req.params.id;
  const tip = await Tip.findById(id);
  try {
    return res.status(200).json({ Tip: tip });
  } catch (error) {
    res.status(500).json({ message: message.error });
  }
};
const updateTip = async (req, res) => {
  const id = req.params.id;
  const data = { ...req.body };
  try {
    const tip = await Tip.findById(id);
    if (tip.host.toString() === req.verifiedUser.id) {
      const updatedTip = await Tip.findByIdAndUpdate(id, data, { new: true });
      return res.status(201).json({ Tip: updatedTip });
    } else {
      return res.status(404).json({ message: "You're not the host" });
    }
  } catch (error) {
    res.status(500).json({ message: message.error });
  }
};

module.exports.createTip = createTip;
module.exports.getTip = getTip;
module.exports.getTips = getTips;
module.exports.searchTip = searchTip;
module.exports.updateTip = updateTip;
