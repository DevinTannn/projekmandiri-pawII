
const userModels = require("../models/userModel");

function getAll(req, res) {
  res.json(userModels.getAll());
}

function getById(req, res) {
  const user = userModels.getById(Number(req.params.id));

  if (!user) {
    return res.status(404).json({ message: "User tidak ditemukan" });
  }

  res.json(user);
}

function create(req, res) {
  const baru = userModels.create(req.body);
  res.status(201).json(baru);
}

module.exports = { getAll, getById, create };
