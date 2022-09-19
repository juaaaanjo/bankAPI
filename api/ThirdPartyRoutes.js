const router = require("express").Router();
const ThirdParty = require("../models/ThirdParty");

router.post("/", async (req, res) => {
    const newThirdParty = new ThirdParty(req.body);
    newThirdParty
      .save()
      .then((post) => {
        res.status(201).json(post);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.get("/", async (req, res) => {
    ThirdParty.find()
      .then((accounts) => {
        res.status(200).json(accounts);
      })
      .catch((err) => {
        res.status(500).json({ error: err.mesagge });
      });
  });

  module.exports = router;