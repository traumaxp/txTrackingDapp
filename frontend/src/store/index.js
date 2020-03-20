import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getWeb3 from '../util/getWeb3'
import daiBalance from '../util/DaiBalance'
import manaBalance from '../util/ManaBalance'
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
    getDaiBalance (state, payload) {
      console.log('getBalances Mutation being executed', payload)
      let result = payload
      let web3Copy = state.web3
      web3Copy.daiBalance = result.daiBalance
    },
    getManaBalance (state, payload) {
      console.log('getManaBalance Mutation being executed', payload)
      let result = payload
      let web3Copy = state.web3
      web3Copy.manaBalance = result.manaBalance
    },
    getThetherBalance (state, payload) {
      console.log('getThetherBalance Mutation being executed', payload)
      let result = payload
      let web3Copy = state.web3
      web3Copy.usdtBalance = result.usdtBalance
    },
    getUsdcBalance (state, payload) {
      console.log('getusdcBalance Mutation being executed', payload)
      let result = payload
      let web3Copy = state.web3
      web3Copy.usdcBalance = result.usdcBalance
    },
    getPaxosBalance (state, payload) {
      console.log('getPaxosBalance Mutation being executed', payload)
      let result = payload
      let web3Copy = state.web3
      web3Copy.paxBalance = result.paxBalance
    },
    getMakerBalance (state, payload) {
      console.log('getMakerbalance Mutation being executed', payload)
      let result = payload
      let web3Copy = state.web3
      web3Copy.mkrBalance = result.mkrBalance
    },
    getBatBalance (state, payload) {
      console.log('getBatBalance Mutation being executed', payload)
      let result = payload
      let web3Copy = state.web3
      web3Copy.batBalance = result.batBalance
    },
    getZrxBalance (state, payload) {
      console.log('getZrxBalance Mutation being executed', payload)
      let result = payload
      let web3Copy = state.web3
      web3Copy.zrxBalance = result.zrxBalance
    },
    getSaiBalance (state, payload) {
      console.log('getSaiBalance Mutation being executed', payload)
      let result = payload
      let web3Copy = state.web3
      web3Copy.saiBalance = result.saiBalance
    },
    getKncBalance (state, payload) {
      console.log('getKncBalance Mutation being executed', payload)
      let result = payload
      let web3Copy = state.web3
      web3Copy.kncBalance = result.kncBalance
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
    getTokensBalance ({ commit }) {
      console.log('getBalances Action being executed')
      daiBalance.then(result => {
        console.log('committing result to getBalances mutation')
        commit('getDaiBalance', result)
      }).catch(e => {
        console.log('error in action getBalances', e)
      })
      manaBalance.then(result => {
        console.log('committing result to getBalances mutation')
        commit('getManaBalance', result)
      }).catch(e => {
        console.log('error in action getManaBalance', e)
      })
      tetherBalance.then(result => {
        console.log('committing result to getBalances mutation')
        commit('getThetherBalance', result)
      }).catch(e => {
        console.log('error in action getThetherBalance', e)
      })
      usdcBalance.then(result => {
        console.log('committing result to getBalances mutation')
        commit('getUsdcBalance', result)
      }).catch(e => {
        console.log('error in action getUsdcBalance', e)
      })
      paxosBalance.then(result => {
        console.log('committing result to getBalances mutation')
        commit('getPaxosBalance', result)
      }).catch(e => {
        console.log('error in action getPaxosBalance', e)
      })
      makerBalance.then(result => {
        console.log('committing result to getBalances mutation')
        commit('getMakerBalance', result)
      }).catch(e => {
        console.log('error in action getMakerBalance', e)
      })
      batBalance.then(result => {
        console.log('committing result to getBalances mutation')
        commit('getBatBalance', result)
      }).catch(e => {
        console.log('error in action getBatBalance', e)
      })
      zrxBalance.then(result => {
        console.log('committing result to getBalances mutation')
        commit('getZrxBalance', result)
      }).catch(e => {
        console.log('error in action getZrxBalance', e)
      })
      saiBalance.then(result => {
        console.log('committing result to getBalances mutation')
        commit('getSaiBalance', result)
      }).catch(e => {
        console.log('error in action getSaiBalance', e)
      })
      kyberNetworkBalance.then(result => {
        console.log('committing result to getBalances mutation')
        commit('getKncBalance', result)
      }).catch(e => {
        console.log('error in action getKncBalance', e)
      })
    }
  }
  // enable strict mode (adds overhead!)
  // for dev mode only
})
