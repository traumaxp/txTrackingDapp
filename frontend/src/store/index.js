import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getWeb3 from '../util/getWeb3'
import web3 from 'web3'

// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    strict: true,
    state,
    mutations: {
      registerWeb3Instance (state, payload) {
        console.log('registerWeb3instance Mutation being executed', payload)
        let result = payload
        let web3Copy = state.web3
        web3Copy.account = result.account
        web3Copy.networkId = result.networkId
        web3Copy.balance = web3.utils.fromWei(result.balance, 'ether')
        web3Copy.isInjected = result.injectedWeb3
        web3Copy.web3Instance = result.web3
        state.web3 = web3Copy
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
      }
    }
    // enable strict mode (adds overhead!)
    // for dev mode only
  })

  return Store
}
