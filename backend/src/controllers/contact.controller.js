const connection =
require("../database/connection");

exports.create =
async (req, res) => {

  try {

    const {
      nome,
      email,
      assunto,
      mensagem
    } = req.body;

    if (
      !nome ||
      !email ||
      !mensagem
    ) {

      return res
        .status(400)
        .json({
          erro:
          "Preencha os campos obrigatórios"
        });

    }

    const sql = `
      INSERT INTO mensagens_contato
      (
        nome,
        email,
        assunto,
        mensagem
      )
      VALUES
      (?, ?, ?, ?)
    `;

    await connection.query(
      sql,
      [
        nome,
        email,
        assunto || null,
        mensagem
      ]
    );

    return res.json({
      sucesso: true,
      mensagem: "Mensagem enviada"
    });

  }

  catch (error) {

    console.log(error);

    return res
      .status(500)
      .json({
        erro: error.message
      });

  }

};

exports.list =
async (req, res) => {

  try {

    const [rows] =
    await connection.query(`
      SELECT *
      FROM mensagens_contato
      ORDER BY id DESC
    `);

    return res.json(rows);

  }

  catch (error) {

    console.log(error);

    return res
      .status(500)
      .json({
        erro: error.message
      });

  }

};

exports.remove =
async (req, res) => {

  try {

    const { id } = req.params;

    await connection.query(
      "DELETE FROM mensagens_contato WHERE id = ?",
      [id]
    );

    return res.json({
      sucesso: true,
      mensagem: "Mensagem removida"
    });

  }

  catch (error) {

    console.log(error);

    return res
      .status(500)
      .json({
        erro: error.message
      });

  }

};