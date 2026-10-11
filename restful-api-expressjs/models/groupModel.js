
let groups = [
  { id: 1, nama: "Kelompok Tugas PAWII", pembuatId: 1 },
  { id: 2, nama: "Kelompok Presentasi MSSI", pembuatId: 3 },
  { id: 3, nama: "Belajar Bareng UTS", pembuatId: 1 },
];

function getAll() {
  return groups;
}

function getById(id) {
  return groups.find((g) => g.id === id);
}

function create(data) {
  const baru = {
    id: groups.length + 1,
    ...data,
  };

  groups.push(baru);
  return baru;
}

module.exports = { getAll, getById, create };
