const connection =
require("../database/connection");

exports.create =
async (req, res) => {

  try {

    const {
      nome,
      email,
      pedido
    } = req.body;

    if (
      !nome ||
      !pedido
    ) {

      return res
        .status(400)
        .json({
          erro:
          "Nome e pedido são obrigatórios"
        });

    }

    await connection.query(
      `
      INSERT INTO pedidos_oracao
      (
        nome,
        email,
        pedido
      )
      VALUES
      (?, ?, ?)
      `,
      [
        nome,
        email || null,
        pedido
      ]
    );

    return res.json({
      sucesso: true,
      mensagem:
      "Pedido enviado"
    });

  }

  catch (error) {

    console.log(error);

    return res
      .status(500)
      .json({
        erro:
        error.message
      });

  }

};

exports.list =
async (req, res) => {

  try {

    const [rows] =
    await connection.query(
      `
      SELECT *
      FROM pedidos_oracao
      ORDER BY id DESC
      `
    );

    return res.json(rows);

  }

  catch (error) {

    console.log(error);

    return res
      .status(500)
      .json({
        erro:
        error.message
      });

  }

};

exports.remove =
async (req, res) => {

  try {

    const { id } =
    req.params;

    await connection.query(
      `
      DELETE FROM pedidos_oracao
      WHERE id = ?
      `,
      [id]
    );

    return res.json({
      sucesso: true
    });

  }

  catch (error) {

    console.log(error);

    return res
      .status(500)
      .json({
        erro:
        error.message
      });

  }

};