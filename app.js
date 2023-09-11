
const express = require("express");
const app = express();

const path = require("path");
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "public")));

app.get("/404", (req, res) => {
  res.send("Error página no encontrada");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src/views/home.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "src/views/login.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "src/views/register.html"));
});

app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT}`));

