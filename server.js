const app = require("./app.js");

require("dotenv").config();
const dummyTransactionData = require('./models/transactionGenerator.js');
const PORT = process.env.PORT || 1313;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});