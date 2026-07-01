const connection =
require("../database/connection");

exports.create =
async (req, res) => {

  try {

    const {
      nome,
      descricao,
      lider,
      imagem
    } = req.body;

    if (
      !nome ||
      !descricao
    ) {

      return res
        .status(400)
        .json({
          erro:
          "Nome e descrição são obrigatórios"
        });

    }

    await connection.query(
      `
      INSERT INTO ministerios
      (
        nome,
        descricao,
        lider,
        imagem
      )
      VALUES
      (?, ?, ?, ?)
      `,
      [
        nome,
        descricao,
        lider || null,
        imagem || null
      ]
    );

    return res.json({
      sucesso: true,
      mensagem:
      "Ministério criado"
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
      FROM ministerios
      ORDER BY nome ASC
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
      DELETE FROM ministerios
      WHERE id = ?
      `,
      [id]
    );

    return res.json({
      sucesso: true,
      mensagem:
      "Ministério removido"
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
