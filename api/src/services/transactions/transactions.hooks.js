const { authenticate } = require('@feathersjs/authentication').hooks;
const Web3 = require('web3');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [ function (context) {
      const web3 = new Web3(new Web3.providers.WebsocketProvider('wss://ropsten.infura.io/ws'))
      console.log('Transaction Hash is   ' + context.data.hash)
      web3.eth.getTransactionReceipt(context.data.hash)
.then(console.log);
      const hash = context.data.hash
      web3.eth.subscribe('pendingTransactions', function (error, result) {})
      .on('confirmation', function (confirmationNumber) {
        console.log(confirmationNumber)
      })
    }
    ],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
