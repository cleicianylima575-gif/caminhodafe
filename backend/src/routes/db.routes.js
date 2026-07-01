const express =
require("express");

const router =
express.Router();

const {
  testConnection,
} =
require(
"../controllers/db.controller"
);

router.get(
"/db",
testConnection
);

module.exports =
router;