const faker = require('faker');

function generateTransaction() {
    const itemName = faker.commerce.productName();
    const amount = faker.datatype.number({ min: 1, max: 1000 });
    const date = faker.date.recent().toDateString();
    const from = faker.company.companyName();
    const category = faker.random.arrayElement(['income', 'savings', 'pets', 'food', 'etc']);
    return {
      itemName,
      amount,
      date,
      from,
      category,
    };
  }

  function generateTransactionData(count) {
    const transactions = [];
    for (let i = 0; i < count; i++) {
      transactions.push(generateTransaction());
    }
    return transactions;
  }
  
  
  const transactionData = generateTransactionData(20);

  console.log(transactionData);

  module.exports = transactionData;