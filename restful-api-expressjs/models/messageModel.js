
let messages = [
  {
    id: 1,
    userId: 2,
    channelId: 1,
    groupId: null,
    isi: "Silakan pelajari materi Pemrograman Web minggu ini."
  },
  {
    id: 2,
    userId: 1,
    channelId: null,
    groupId: 1,
    isi: "Siapa yang buat ppt presentasi?"
  },
  {
    id: 3,
    userId: 3,
    channelId: null,
    groupId: 2,
    isi: "Saya akan mengerjakan bagian ppt presentasi."
  },
];

function getAll() {
  return messages;
}

function getById(id) {
  return messages.find((m) => m.id === id);
}

function create(data) {
  const baru = {
    id: messages.length + 1,
    ...data,
  };

  messages.push(baru);
  return baru;
}

module.exports = { getAll, getById, create };
