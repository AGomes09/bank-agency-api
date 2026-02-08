require("dotenv").config();

const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

const bancosRoutes = require("./routes/bancos");
const agenciasRoutes = require("./routes/agencias");

app.use("/api/bancos", bancosRoutes);
app.use("/api/agencias", agenciasRoutes);

app.get("/", (req, res) => {
  res.json({ status: "API rodando!!!" });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
