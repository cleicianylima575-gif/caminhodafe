const connection =
require("../database/connection");

const bcrypt =
require("bcryptjs");

const jwt =
require("jsonwebtoken");

exports.register =
async (req, res) => {

  try {

    const {
      nome,
      email,
      senha
    } = req.body;

    if (
      !nome ||
      !email ||
      !senha
    ) {

      return res
        .status(400)
        .json({
          erro:
          "Todos os campos são obrigatórios"
        });

    }

    const senhaHash =
      await bcrypt.hash(
        senha,
        10
      );

    await connection.query(
      `
      INSERT INTO usuarios
      (
        nome,
        email,
        senha
      )
      VALUES
      (?, ?, ?)
      `,
      [
        nome,
        email,
        senhaHash
      ]
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

exports.login =
async (req, res) => {

  try {

    const {
      email,
      senha
    } = req.body;

    const [rows] =
    await connection.query(
      `
      SELECT *
      FROM usuarios
      WHERE email = ?
      `,
      [email]
    );

    if (
      rows.length === 0
    ) {

      return res
        .status(401)
        .json({
          erro:
          "Usuário não encontrado"
        });

    }

    const usuario =
      rows[0];

    const senhaValida =
      await bcrypt.compare(
        senha,
        usuario.senha
      );

    if (
      !senhaValida
    ) {

      return res
        .status(401)
        .json({
          erro:
          "Senha inválida"
        });

    }

    const token =
      jwt.sign(
        {
          id:
          usuario.id,
          email:
          usuario.email
        },
        process.env.JWT_SECRET,
        {
          expiresIn:
          "7d"
        }
      );

    return res.json({

      sucesso: true,

      token,

      usuario: {

        id:
        usuario.id,

        nome:
        usuario.nome,

        email:
        usuario.email

      }

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