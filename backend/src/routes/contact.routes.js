const express =
require("express");

const router =
express.Router();

const {
  create,
  list,
  remove,
} =
require(
  "../controllers/contact.controller"
);

router.post(
  "/contato",
  create
);

router.get(
  "/contato",
  list
);

router.delete(
  "/contato/:id",
  remove
);

module.exports =
router;