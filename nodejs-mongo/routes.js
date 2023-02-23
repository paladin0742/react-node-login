const express = require("express");
const User = require("./models/User");
const router = express.Router();

router.get("/users", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

router.post("/users", async (req, res) => {
  const user = new User({
    name: req.body.name,
    password: req.body.password
  });
  await user.save();
  res.send(user);
});

router.post("/user", async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.findOne({ name: req.body.name });
    if (user.password !== req.body.password)
      res.send({status: 'failed'})
    console.log(user)
    res.send({status: 'success'});
  } catch {
    res.status(404);
    res.send({ error: "User doesn't exist!" });
  }
});

router.patch("/users/:id", async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });

    if (req.body.name) {
      user.name = req.body.name;
    }

    if (req.body.password) {
      user.password = req.body.password;
    }

    await user.save();
    res.send(user);
  } catch {
    res.status(404);
    res.send({ error: "User doesn't exist!" });
  }
});

router.delete("/users/:id", async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.status(204).send();
  } catch {
    res.status(404);
    res.send({ error: "User doesn't exist!" });
  }
});

module.exports = router;
