const express = require("express");

const transactions = express.Router();

const transactionData = require("../models/transactionData");


transactions.get("/", (req, res) => {
    
    console.log("Transactions Incoming...")
   
    res.json(transactionData);
})


transactions.get("/:index", (req, res) => {
    const { index } = req.params;
    console.log(`Displaying Index #${index}`)
    if (transactionData[index]) {
        res.status(200).json(transactionData[index])
    } else {
        res.redirect(404,"No transaction at that index")
    }
})


module.exports = transactions;