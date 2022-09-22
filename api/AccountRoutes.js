const router = require("express").Router();
const Account = require("../models/Account");

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  const updateAccount = await Account.findOneAndUpdate({_id: id}, req.body, {
    runValidators: true,
  }).then((account) => {
    if (account) {
      res.status(201).json(account);
    } else {
      res.status(401).json({ error: "No existe cuenta con ID" });
    }
  });
});

router.get("/:id", async (req, res) => {
  console.log(req.params);
  Account.findById({ _id: req.params.id })
    .then((account) => {
      console.log(account);
      if (user) {
        res.status(200).json(account);
      } else {
        res.status(401).json({ error: "No existe usuario con ID" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.mesagge });
    });
});

router.post("/", async (req, res) => {
  const newAccount = new Account(req.body);
  newAccount
    .save()
    .then((post) => {
      res.status(201).json(post);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get("/", async (req, res) => {
  Account.find()
    .then((accounts) => {
      res.status(200).json(accounts);
    })
    .catch((err) => {
      res.status(500).json({ error: err.mesagge });
    });
});

const accountExists = async (account) => {
  const user = await Account.findOne({ account: account });
  if (user) {
    return true;
  } else {
    return false;
  }
};

module.exports = router;
