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
  "../controllers/ministry.controller"
);

router.get(
  "/ministerios",
  list
);

router.post(
  "/ministerios",
  auth,
  create
);

router.delete(
  "/ministerios/:id",
  auth,
  remove
);

module.exports =
router;