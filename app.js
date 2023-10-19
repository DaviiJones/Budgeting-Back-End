const express = require("express");

const app = express();
const cors = require("cors")

app.use(express.json());



app.get("/",(req, res) => {
    res.send('Welcome to my Budgeting App!');
});
app.get('/transactionData', (req, res) => {
    res.json(dummyTransactionData);
  });
  
app.get("*", (req, res) => {
    res.status(404).json({error: "Sorry! No page found"})
});


module.exports = app;
