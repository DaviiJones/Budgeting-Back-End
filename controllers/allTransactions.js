const express = require("express");

const transactions = express.Router();

const transactionData = require("../models/transactionData");


transactions.get("/", (req, res) => {

    console.log("Transactions Incoming...")

    res.json(transactionData);
})


module.exports = transactions;