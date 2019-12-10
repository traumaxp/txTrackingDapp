const users = require('./users/users.service.js');
const messages = require('./messages/messages.service.js');
const transactions = require('./transactions/transactions.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(messages);
  app.configure(transactions);
};
