<template>
  <div class="q-pa-md row items-start q-gutter-md flex flex-center">
    <q-card style="min-width:400px" class="my-card">
      <q-card-section>
        <div class="text-h6">Create a TX</div>
      </q-card-section>
      <q-card-section>
        Your address:
        <q-input outlined v-model="account"></q-input>
        <div>
          Send Ether to
          <q-input outlined v-model="recipientAddress"></q-input>
          amount to send
          <q-input outlined v-model="amount"></q-input>
          <q-btn @click="sendAndSaveTx" label="Send Ether" />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
import { NETWORKS } from '../util/constants/networks'
import { mapState } from 'vuex'
import Web3 from 'web3'
export default {
  name: 'sendTx',
  data: () => ({
    amount: '',
    recipientAddress: ''
  }),
  computed: mapState({
    isInjected: state => state.web3.isInjected,
    network: state => NETWORKS[state.web3.networkId],
    account: state => state.web3.account,
    balance: state => state.web3.balance,
    ethBalance: state => {
      if (state.web3.web3Instance !== null) return state.web3.web3Instance().fromWei(state.web3.balance, 'ether')
    }
  }),
  methods: {
    sendAndSaveTx (amount) {
      var txId
      var web3 = new Web3(window.web3.currentProvider)
      const { Transaction } = this.$FeathersVuex.api
      web3.eth
        .sendTransaction({
          from: this.account,
          to: '0x1889ef49cdbaad420eb4d6f04066ca4093088bbd',
          value: this.amount // 10017897970
        })
        .on('transactionHash', function (hash) {
          const txHash = {
            transactionHash: hash
          }
          const transaction = new Transaction(txHash)
          transaction.save()
            .then(transaction => {
              console.log(transaction)
              txId = transaction._id
            })
        })
        .on('confirmation', function (confirmationNumber, receipt) {
          console.log(confirmationNumber)
          console.log(receipt)
          if (confirmationNumber === 0) {
            const transaction = new Transaction({ id: txId, transactionObject: receipt })
            transaction.save()
              .then(transaction => {
                console.log(transaction)
              })
          }
        })
    }
  }
}
</script>

<style scoped>
.metamask-info {
  text-align: center
}
#has-metamask {
  color: green
}
#no-metamask {
  color: red
}
</style>
