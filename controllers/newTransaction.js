const express = require("express");

const transactions = express.Router();

const transactionData = require("../models/transactionData");


transactions.post("/", (req, res) => {
    console.log("Post Route Found..");
    newTransaction = req.body;
    if (
        newTransaction.id &&
        newTransaction.itemName &&
        newTransaction.amount &&
        newTransaction.date &&
        newTransaction.from &&
        newTransaction.category
    ) {
        transactionData.push(newTransaction);
        console.log(`transactionData.length - 1`)
        //displaying the body created by the user 
        res.status(200).json({ status: "Transaction Added", payload: transactionData[transactionData.length - 1] })
      }  else {
        res.status(400).json({error: "Bad Request: Invalid transaction data"});
      }
    });

module.exports = transactions;