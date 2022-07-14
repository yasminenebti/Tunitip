module.exports = function (req, res, next) {
  if (!req.verifiedUser.isHost) {
    return res.status(403).json({ message: "You are not a host" });
  }
  next();
};
