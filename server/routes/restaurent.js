const express = require("express");
const router = express.Router();
const { Restaurent } = require('../models');

router.get("/", (req, res) => {
    const listOfRests = Restaurent.findAll();
    res.json(listOfRests);  
});

router.post("/", async (req, res) => {
    const rest = req.body;
    await Restaurent.create(rest);
    res.json(rest);
});

module.exports = router;