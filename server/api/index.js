const express = require("express");
const router = express.Router();

const db = require("../helpers/db");

router.get("/shelters", (req, res) => {
  db.getShelters().then(data => {
    res.send(data);
  });
});

// GET /status
router.get("/status", (req, res) => {
  db.getStatus().then(data => {
    res.send(data);
  });
});

module.exports = router;
