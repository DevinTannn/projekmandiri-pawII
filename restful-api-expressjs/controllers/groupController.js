const groupModel = require("../models/groupModel");

function getAll(req, res) {
  res.json(groupModel.getAll());
}

function getById(req, res) {
  const group = groupModel.getById(Number(req.params.id));
  if (!group) {
    return res.status(404).json({ message: "Data tidak ditemukan" });
  }
  res.json(group);
}

function create(req, res) {
  const baru = groupModel.create(req.body);
  res.status(201).json(baru);
}

module.exports = { getAll, getById, create };