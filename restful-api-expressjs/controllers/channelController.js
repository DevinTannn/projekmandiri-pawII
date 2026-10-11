const channelModel = require("../models/channelModel");

function getAll(req, res) {
  res.json(channelModel.getAll());
}

function getById(req, res) {
  const channel = channelModel.getById(Number(req.params.id));
  if (!channel) {
    return res.status(404).json({ message: "Data tidak ditemukan" });
  }
  res.json(channel);
}

function create(req, res) {
  const baru = channelModel.create(req.body);
  res.status(201).json(baru);
}

module.exports = { getAll, getById, create };