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
      console.log('Transaction hash  ' + context.data.hash)
      const web3 = new Web3(new Web3.providers.HttpProvider('ropsten.infura.io/v3/1d38f839d2094faeb26482baefb57106'))
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
