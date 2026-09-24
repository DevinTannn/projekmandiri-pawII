// Mini Project - CampusTalk: CRUD Users (Mahasiswa & Dosen)
// Jalankan dengan: npm install && npm start

const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// ==========================================
// DATABASE SEMENTARA (Tabel Users)
// ==========================================

let users = [
  { 
    id: 1, 
    nomorInduk: "2024001", 
    nama: "Andi Pratama", 
    role: "mahasiswa", 
    jurusan: "Sistem Informasi", 
    email: "andi.pratama@student.ac.id", 
    status: "Aktif" 
  },
  { 
    id: 2, 
    nomorInduk: "19850312", 
    nama: "Dr. Budi Santoso, M.Kom.", 
    role: "dosen", 
    jurusan: "Teknik Informatika", 
    email: "budi.santoso@dosen.ac.id", 
    status: "Aktif" 
  },
  { 
    id: 3, 
    nomorInduk: "2023045", 
    nama: "Siti Rahma", 
    role: "mahasiswa", 
    jurusan: "Teknik Informatika", 
    email: "siti.rahma@student.ac.id", 
    status: "Cuti" 
  },
  { 
    id: 4, 
    nomorInduk: "2020015", 
    nama: "Dewi Lestari, S.Kom.", 
    role: "mahasiswa", 
    jurusan: "Sistem Informasi", 
    email: "dewi.lestari@alumni.ac.id", 
    status: "Alumni" 
  },
  { 
    id: 5, 
    nomorInduk: "19900520", 
    nama: "Dr. Rina Melati, M.T.", 
    role: "dosen", 
    jurusan: "Sistem Informasi", 
    email: "rina.melati@dosen.ac.id", 
    status: "Aktif" 
  },
  { 
    id: 6, 
    nomorInduk: "2024003", 
    nama: "Joko Anwar", 
    role: "mahasiswa", 
    jurusan: "Manajemen Informatika", 
    email: "joko.anwar@student.ac.id", 
    status: "Aktif" 
  },
  { 
    id: 7, 
    nomorInduk: "19881122", 
    nama: "Prof. Dr. Hendra Wijaya", 
    role: "dosen", 
    jurusan: "Teknik Informatika", 
    email: "hendra.wijaya@dosen.ac.id", 
    status: "Aktif" 
  }
];


// ==========================================
// ENDPOINT CRUD USERS
// ==========================================

// 1. GET /users -> Ambil seluruh data pengguna
app.get("/users", (req, res) => {
  res.json({
    message: "Berhasil mengambil seluruh data users CampusTalk",
    total: users.length,
    data: users
  });
});

// 2. GET /users/status/aktif atau /users/status/cuti -> Filter berdasarkan status
app.get("/users/status/aktif", (req, res) => {
  const data = users.filter((u) => u.status === "Aktif");
  if (data.length === 0) return res.status(404).json({ message: 'Data Tidak Ditemukan' });
  res.json(data);
});

app.get("/users/status/cuti", (req, res) => {
  const data = users.filter((u) => u.status === "Cuti");
  if (data.length === 0) return res.status(404).json({ message: 'Data Tidak Ditemukan' });
  res.json(data);
});

// 3. GET /users/:id -> Cari pengguna berdasarkan ID
app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  if (!user) return res.status(404).json({ message: 'Data tidak ditemukan' });
  res.json(user);
});

// 4. POST /users -> Tambah pengguna baru (mahasiswa/dosen)
app.post("/users", (req, res) => {
  const { nomorInduk, nama, role, jurusan, email, status } = req.body;
  
  const newUser = {
    id: users.length + 1,
    nomorInduk: nomorInduk || "-",
    nama: nama,
    role: role || "mahasiswa",
    jurusan: jurusan || "-",
    email: email || "-",
    status: status || "Aktif"
  };

  users.push(newUser);
  res.status(201).json({
    message: "Berhasil menambahkan pengguna baru",
    data: newUser
  });
});

// 5. PUT /users/:id -> Update data pengguna berdasarkan ID
app.put("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'Data tidak ditemukan' });
  }

  users[index] = { ...users[index], ...req.body };
  res.json({
    message: "Data pengguna berhasil diperbarui",
    data: users[index]
  });
});

// 6. DELETE /users/:id -> Hapus pengguna berdasarkan ID
app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'Data tidak ditemukan' });
  }

  users.splice(index, 1);
  res.status(204).send();
});


// ==========================================
// MENJALANKAN SERVER
// ==========================================
app.listen(PORT, () => {
  console.log(`Server CampusTalk berjalan di http://localhost:${PORT}`);
});