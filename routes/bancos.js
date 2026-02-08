// routes/categorias.js
const express = require("express");
const router = express.Router();
const pool = require("../db");

router.get("/", async (req, res) => {
  // Eu fiz
  try {
    const [ban] = await pool.query("SELECT * FROM bancos");

    if (ban.length === 0) {
      return res.status(404).json({ erro: "Recurso não encontrado" });
    }

    res.json(ban);
  } catch (error) {
    res.status(500).json({ erro: err.message });
  }
});

// GET /api/categorias/:id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // 1) Busca a categoria pelo ID
    const [ban] = await pool.query("SELECT * FROM bancos WHERE id = ?", [id]);

    if (ban.length === 0) {
      return res.status(404).json({ erro: "Recurso não encontrado" });
    }

    const bancos = ban[0];

    // 2) Busca os produtos dessa categoria (lado N)
    const [agencias] = await pool.query(
      "SELECT * FROM agencias WHERE banco_id = ?",
      [id],
    );

    // 3) Monta resposta aninhada e retorna

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
