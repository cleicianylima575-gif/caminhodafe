exports.health = (req, res) => {

  return res.json({
    status: "ok",
    message: "Backend funcionando"
  });

};