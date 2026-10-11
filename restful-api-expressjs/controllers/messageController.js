const messageModel = require("../models/messageModel");

function getAll(req, res) {
  res.json(messageModel.getAll());
}

function getById(req, res) {
  const message = messageModel.getById(Number(req.params.id));
  if (!message) {
    return res.status(404).json({ message: "Data tidak ditemukan" });
  }
  res.json(message);
}

function create(req, res) {
  const baru = messageModel.create(req.body);
  res.status(201).json(baru);
}

function _delete(req, res) {
  res.status(200).json({ message: "Berhasil dihapus" });
}

module.exports = { getAll, getById, create, delete: _delete };