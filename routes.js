const express = require('express');
const todos = require("./todos");

const router = express.Router();

router.get("/todos", function(req, res) {
  res.json(todos);
});
router.get("/users/get", function(req, res) {
  res.json([
    {
    name: "armstrong",
    age: 20
  },
    {
    name: "elvis",
    age: 18
  },
    {
    name: "tosin",
    age: 19
  },

]);
});

router.post("/users/create", function(req, res) {
  res.json({
    success: true,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  }).sendStatus(200);
});

module.exports = router;
