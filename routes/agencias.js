const express = require("express");
const router = express.Router();
const pool = require("../db");

router.get("/", async (req, res) => {
  try {
    const [agencias] = await pool.query("SELECT * FROM agencias");

    if (agencias.length === 0) {
      return res.status(404).json({ erro: "Recurso não encontrado" });
    }

    res.json(agencias);
  } catch (error) {
    res.status(500).json({ erro: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const [ban] = await pool.query("SELECT * FROM agencias WHERE id = ?", [id]);

    if (ban.length === 0) {
      return res.status(404).json({ erro: "Recurso não encontrado" });
    }

    const bancos = ban[0];

    res.json(bancos);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { numero, clientes, localidade, estado, banco_id } = req.body;

    if (!numero || !clientes || !localidade || !estado || !banco_id) {
      return res
        .status(400)
        .json({ erro: "Dados inválidos ou Campos ausentes" });
    }

    const [ban] = await pool.query("SELECT id FROM bancos WHERE id = ?", [
      banco_id,
    ]);

    if (ban.length === 0) {
      return res.status(400).json({ erro: "Banco não encontrado" });
    }

    const [result] = await pool.query(
      "INSERT INTO agencias (numero,clientes,localidade,estado, banco_id) VALUES (?,?,?,?,?)",
      [numero, clientes, localidade, estado, banco_id],
    );

    res.status(201).json({
      id: result.insertId,
      numero,
      clientes,
      localidade,
      estado,
      banco_id,
    });
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});

module.exports = router;
