<template>
  <div class="q-pa-md row items-start q-gutter-md flex flex-center">
    <q-card class="my-card">
      <q-card-section>
        <div class="row">
          <div class="col text-center">
            <p v-if="isInjected" id="has-metamask">
              <i aria-hidden="true" class="fa fa-check"></i> Metamask installed
            </p>
            <div class="text-h6">Network: {{ network }}</div>
          </div>
          <q-separator vertical />
          <div class="col text-center text-h6">
            <div>ETHEREUM INFOS</div>
            <div class="text-body1">LatestBlock: {{lastestBlock}}</div>
          </div>
        </div>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <p class="text-body1">Account: {{ account }}</p>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <p class="text-body1">Balance: {{ balance }} Ether</p>
        <p class="text-body1">Balance: {{ daiBalance }} Dai</p>
      </q-card-section>
      {{test}}
    </q-card>
  </div>
</template>
<script>
import Web3 from 'web3'
import { NETWORKS } from '../util/constants/networks'
import { mapState } from 'vuex'
export default {
  name: 'hello-metamask',
  data: () => ({}),
  created () {
    var web3 = new Web3(window.web3.currentProvider)
    web3.eth.getBlockNumber().then(console.log)
  },
  computed: mapState({
    isInjected: state => state.web3.isInjected,
    network: state => NETWORKS[state.web3.networkId],
    account: state => state.web3.account,
    balance: state => state.web3.balance,
    ethBalance: state => {
      if (state.web3.web3Instance !== null) {
        return state.web3.web3Instance().fromWei(state.web3.balance, 'ether')
      }
    },
    lastestBlock: state => state.web3.latestBlock,
    daiBalance: state => state.web3.daiBalance,
    test () {
      var web3 = new Web3(window.web3.currentProvider)
      let tokenAddress = '0x6b175474e89094c44da98b954eedeac495271d0f'
      let walletAddress = '0xB74fc3B69f626226f7F1c53D9D6D340AC291d481'

      let minABI = [
        {
          constant: true,
          inputs: [{ name: '_owner', type: 'address' }],
          name: 'balanceOf',
          outputs: [{ name: 'balance', type: 'uint256' }],
          type: 'function'
        },
        // decimals
        {
          constant: true,
          inputs: [],
          name: 'decimals',
          outputs: [{ name: '', type: 'uint8' }],
          type: 'function'
        }
      ]

      let contract = new web3.eth.Contract(minABI, tokenAddress)
      contract.methods.balanceOf(walletAddress).call().then((balance) => {
        contract.methods.decimals().call().then((decimals) => {
          balance = balance / (10 ** decimals)
          console.log(balance.toString())
        })
      })
    }
  })
}
</script>

<style scoped>
.q-card {
  height: 350px;
}
.metamask-info {
  text-align: center;
}
#has-metamask {
  color: green;
}
#no-metamask {
  color: red;
}
</style>
