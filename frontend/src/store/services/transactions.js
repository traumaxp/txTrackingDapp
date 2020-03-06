import feathersClient, { makeServicePlugin, BaseModel } from '../../feathers-client'

// Extend the base class
class Transaction extends BaseModel {
  // eslint-disable-next-line no-useless-constructor
  constructor (data, options) {
    super(data, options)
  }
  static modelName = 'Transaction'
  static instanceDefaults () {
    return {
      from: '',
      recipientAddress: '',
      amount: '',
      transactionHash: '',
      transactionValue: '',
      transactionObject: ''
    }
  }
}

const servicePath = 'transactions'
const servicePlugin = makeServicePlugin({
  Model: Transaction,
  service: feathersClient.service(servicePath),
  servicePath
})

// Optionally add service-level hooks, here:
feathersClient.service(servicePath).hooks({
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
    create: [],
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
})

export default servicePlugin
