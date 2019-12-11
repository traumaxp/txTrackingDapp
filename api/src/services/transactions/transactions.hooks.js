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
      console.log(context.data)
      const web3 = new Web3(new Web3.providers.HttpProvider('ropsten.infura.io/v3/1d38f839d2094faeb26482baefb57106'))
      console.log(web3)
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
