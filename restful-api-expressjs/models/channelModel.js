
let channels = [
  { id: 1, nama: "Pemrograman Web", dosenId: 2, kelas: "SI3A" },
  { id: 2, nama: "Basis Data", dosenId: 2, kelas: "SI3A" },
  { id: 3, nama: "Pengumuman Prodi Sistem Informasi", dosenId: 2, kelas: "SI" },
];

function getAll() {
  return channels;
}

function getById(id) {
  return channels.find((c) => c.id === id);
}

function create(data) {
  const baru = {
    id: channels.length + 1,
    ...data,
  };

  channels.push(baru);
  return baru;
}

module.exports = { getAll, getById, create };
