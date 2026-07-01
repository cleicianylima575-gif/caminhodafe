const express =
require("express");

const router =
express.Router();

const auth =
require("../middleware/auth");

const {
  create,
  list,
  remove
} =
require(
  "../controllers/event.controller"
);

router.get(
  "/eventos",
  list
);

router.post(
  "/eventos",
  auth,
  create
);

router.delete(
  "/eventos/:id",
  auth,
  remove
);

module.exports =
router;