const router = require("express").Router();
const ThirdParty = require("../models/ThirdParty");

router.post("/", async (req, res) => {
  if (await accountExists(req.body.account)) {
    res.status(409).json({ email: "Account is already registered" });
  } else {
    const newThirdParty = new ThirdParty(req.body);
    newThirdParty
      .save()
      .then((post) => {
        res.status(201).json(post);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  }
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

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  const updateAccount = await ThirdParty.findOneAndUpdate(id, req.body, {
    runValidators: true,
  }).then((account) => {
    if (account) {
      res.status(201).json(account);
    } else {
      res.status(401).json({ error: "No existe cuenta" });
    }
  });
});

const accountExists = async (accountNumber) => {
  const account = await ThirdParty.findOne({ account: accountNumber });
  if (account) {
    return true;
  } else {
    return false;
  }
};

module.exports = router;
