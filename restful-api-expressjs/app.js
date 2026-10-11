const express = require("express");

const app = express();

app.use(express.json());

const userRoutes = require("./routes/userRoutes");
const groupRoutes = require("./routes/groupRoutes");
const channelRoutes = require("./routes/channelRoutes");
const messageRoutes = require("./routes/messageRoutes");

app.use("/users", userRoutes);
app.use("/groups", groupRoutes);
app.use("/channels", channelRoutes);
app.use("/messages", messageRoutes);
console.log("Semua rute berhasil didaftarkan!");

app.listen(3000, () => {
  console.log("Server berjalan di http://localhost:3000");
});