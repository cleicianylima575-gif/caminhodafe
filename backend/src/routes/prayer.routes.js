const express =
require("express");

const router =
express.Router();

const {
  create,
  list,
  remove
} =
require(
  "../controllers/prayer.controller"
);

router.post(
  "/oracao",
  create
);

router.get(
  "/oracao",
  list
);

router.delete(
  "/oracao/:id",
  remove
);

module.exports =
router;