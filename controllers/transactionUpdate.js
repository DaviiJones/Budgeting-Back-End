const express = require("express");

const transactions = express.Router();

const transactionData = require("../models/transactionData");

transactions.put("/:arrayIndex", (req, res) => {
    const { arrayIndex } = req.params
    if (transactionData[arrayIndex]){
        transactionData[arrayIndex] = req.body
        res.status(200).json((transactionData[arrayIndex]))
    } else{
        res.status(404).json({error: "Could not find transaction to be updated"})
    }
})
module.exports = bookmarks;