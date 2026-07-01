const connection =
require("../database/connection");

exports.create =
async (req, res) => {

  try {

    const {
      titulo,
      descricao,
      data_evento,
      imagem
    } = req.body;

    if (
      !titulo ||
      !descricao ||
      !data_evento
    ) {

      return res
        .status(400)
        .json({
          erro:
          "Preencha os campos obrigatórios"
        });

    }

    await connection.query(
      `
      INSERT INTO eventos
      (
        titulo,
        descricao,
        data_evento,
        imagem
      )
      VALUES
      (?, ?, ?, ?)
      `,
      [
        titulo,
        descricao,
        data_evento,
        imagem || null
      ]
    );

    return res.json({
      sucesso: true,
      mensagem:
      "Evento criado"
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
      FROM eventos
      ORDER BY data_evento ASC
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
      DELETE FROM eventos
      WHERE id = ?
      `,
      [id]
    );

    return res.json({
      sucesso: true,
      mensagem:
      "Evento removido"
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