require("dotenv").config();

// server.js
const express = require("express");
const app = express();
const PORT = 3000;

// Middleware: parseia corpo da requisição como JSON
app.use(express.json());

// Importa e monta as rotas de cada entidade
const bancosRoutes = require("./routes/bancos");
const agenciasRoutes = require("./routes/agencias");

app.use("/api/bancos", bancosRoutes);
app.use("/api/agencias", agenciasRoutes);

// Rota raiz — teste rápido para confirmar que o servidor está rodando
app.get("/", (req, res) => {
  res.json({ status: "API rodando!" });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
