// Initializes the `transactions` service on path `/transactions`
const { Transactions } = require('./transactions.class');
const createModel = require('../../models/transactions.model');
const hooks = require('./transactions.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/transactions', new Transactions(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('transactions');

  service.hooks(hooks);
};
