const connection =
require("../database/connection");

exports.testConnection =
async (req, res) => {

  try {

    const [rows] =
    await connection.query(
      "SELECT 1 AS conectado"
    );

    return res.json(rows);

  }

  catch (error) {

    console.log(error);

    return res.status(500).json({
      erro:
      error.message
    });

  }

};