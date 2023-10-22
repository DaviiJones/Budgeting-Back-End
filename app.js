const express = require("express");
const transaction = require("./controllers/allTransactions");

const app = express();
const cors = require("cors");
app.use(cors({ origin: "http://localhost:1313" }));

app.use(express.json());
app.use("/transaction", transaction);

// const coolest = "Gen";

app.get("/", (req, res) => {
   
    res.send(`Welcome to my Budgeting App!`);
})

app.get("*", (req, res) => {
    res.status(404).json({error: "no page found "})
})



module.exports = app;