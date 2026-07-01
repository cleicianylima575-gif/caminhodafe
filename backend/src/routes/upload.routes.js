const express =
require("express");

const router =
express.Router();

const auth =
require("../middleware/auth");

const upload =
require("../middleware/upload");

router.post(
  "/upload",
  auth,
  upload.single("imagem"),
  (req, res) => {

    if (!req.file) {

      return res.status(400).json({
        erro:
        "Nenhuma imagem enviada"
      });

    }

    return res.json({

      sucesso: true,

      arquivo:
      req.file.filename,

      caminho:
      `http://localhost:4000/uploads/${req.file.filename}`

    });

  }
);

module.exports =
router;