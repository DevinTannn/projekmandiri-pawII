let users = [
  {
    id: 1,
    nama: "Ananda",
    email: "ananda@gmail.com",
    password: "12345",
    npm: "20240001",
    role: "mahasiswa"
  },
  {
    id: 2,
    nama: "Budiman",
    email: "budiman@gmail.com",
    password: "54321",
    nidn: "0015018001",
    role: "dosen"
  },
  {
    id: 3,
    nama: "Citra",
    email: "citra@gmail.com",
    password: "12345",
    npm: "20200001",
    role: "alumni"
  },
];

function getAll() {
  return users;
}

function getById(id) {
  return users.find((u) => u.id === id);
}

function create(data) {
  const baru = {
    id: users.length + 1,
    ...data,
  };

  users.push(baru);
  return baru;
}

module.exports = { getAll, getById, create };