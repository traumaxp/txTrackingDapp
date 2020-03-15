import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getWeb3 from '../util/getWeb3'
import getTokensBalances from '../util/getTokensBalances'
import web3 from 'web3'
import { FeathersVuex } from '../feathers-client'

// import example from './module-example'

Vue.use(Vuex)
Vue.use(FeathersVuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */
import users from './services/users'
import transactions from './services/transactions.js'
export default new Vuex.Store({
  strict: true,
  plugins: [
    // if you're using require.context, spread the plugins into the array.
    // users, // if you're manually importing, just add the plugins into the array, like this
    users,
    transactions
  ],
  state,
  mutations: {
    registerWeb3Instance (state, payload) {
      console.log('registerWeb3instance Mutation being executed', payload)
      let result = payload
      let web3Copy = state.web3
      web3Copy.account = result.account
      web3Copy.latestBlock = result.latestBlock
      web3Copy.networkId = result.networkId
      web3Copy.balance = web3.utils.fromWei(result.balance, 'ether')
      web3Copy.isInjected = result.injectedWeb3
      web3Copy.web3Instance = result.web3
    },
    getBalances (state, payload) {
      console.log('getBalances Mutation being executed', payload)
      let result = payload
      let web3Copy = state.web3
      web3Copy.daiBalance = result.daiBalance
    }
  },
  actions: {
    registerWeb3 ({ commit }) {
      console.log('registerWeb3 Action being executed')
      getWeb3.then(result => {
        console.log('committing result to registerWeb3Instance mutation')
        commit('registerWeb3Instance', result)
      }).catch(e => {
        console.log('error in action registerWeb3', e)
      })
    },
    getBalances ({ commit }) {
      console.log('getBalances Action being executed')
      getTokensBalances.then(result => {
        console.log('committing result to getBalances mutation')
        commit('getBalances', result)
      }).catch(e => {
        console.log('error in action getBalances', e)
      })
    }
  }
  // enable strict mode (adds overhead!)
  // for dev mode only
})
