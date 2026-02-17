// routes/bancos.js
const express = require("express");
const router = express.Router();
const pool = require("../db");

router.get("/", async (req, res) => {
  try {
    const [ban] = await pool.query(
      "SELECT b.id, b.nome, a.id, a.numero, a.clientes, a.localidade, a.estado, a.banco_id FROM bancos AS b join agencias AS a ON b.id = a.banco_id ORDER BY b.id",
    );

    if (ban.length === 0) {
      return res.status(404).json({ erro: "Recurso não encontrado" });
    }

    res.json(ban);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

// GET /api/bancos/:id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const [ban] = await pool.query("SELECT * FROM bancos WHERE id = ?", [id]);

    if (ban.length === 0) {
      return res.status(404).json({ erro: "Recurso não encontrado" });
    }

    const bancos = ban[0];

    const [agencias] = await pool.query(
      "SELECT * FROM agencias WHERE banco_id = ?",
      [id],
    );

    bancos.agencias = agencias;
    res.json(bancos);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

// POST
router.post("/", async (req, res) => {
  try {
    const { nome } = req.body;

    if (!nome) {
      res.status(400).json({ erro: "Dados inválidos ou Campos ausentes!" });
    }

    const resultado = await pool.query(
      "INSERT INTO bancos (nome) VALUES (?)",
      nome,
    );

    res.status(201).json({
      nome: resultado,
    });
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});
module.exports = router;
