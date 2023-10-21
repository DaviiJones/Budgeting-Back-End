const express = require("express");

const transactions = express.Router();

const transactionData = require("../models/transactionData");

transactions.delete("/:arrayIndex", (req, res) => {
    const { arrayIndex } = req.params
    if (transactionData[arrayIndex]) {
        const deletedTransaction = transactionData.splice(arrayIndex, 1);
        console.log(deletedTransaction);
        res.status(200).json(deletedBookmark[0])
    } else {
        res.status(404).json({ errror: "Could not locate bookmark to be deleted!" })
    }
})
module.exports = transactions;