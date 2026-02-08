const express = require("express");
const router = express.Router();
const pool = require("../db");

router.post("/", async (req, res) => {
  try {
    const { numero, clientes, localidade, estado, banco_id } = req.body;

    // Validação: campos obrigatórios
    if (!numero || !clientes || !localidade || !estado || !banco_id) {
      return res
        .status(400)
        .json({ erro: "Dados inválidos ou Campos ausentes" });
    }

    // Verifica se a categoria existe (FK válida)

    const [ban] = await pool.query("SELECT id FROM bancos WHERE id = ?", [
      banco_id,
    ]);

    if (ban.length === 0) {
      return res.status(400).json({ erro: "Banco não encontrado" });
    }

    // Insere o produto com parâmetros preparados (evita SQL Injection)
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
