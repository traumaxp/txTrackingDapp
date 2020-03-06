<template>
  <div class="q-pa-md row items-start q-gutter-md flex flex-center">
    <q-card style="min-width:400px" class="my-card">
      <q-card-section>
        <div class="text-h6">Create a TX</div>
      </q-card-section>
      <q-card-section>
        Your address:
        <div>
          <q-form v-model="valid" @submit.prevent="sendAndSaveTx" class="q-gutter-md">
            <q-input outlined v-model="account"></q-input>
          Send Ether to
          <q-input outlined v-model="recipientAddress"></q-input>
          amount to send
          <q-input outlined v-model="amount"></q-input>
          <q-btn label="Submit" type="submit" :disabled="!valid" color="primary" />
          </q-form>
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
    valid: false,
    recipientAddress: '',
    amount: ''
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
    sendAndSaveTx () {
      var txId
      var amount = this.amount
      var web3 = new Web3(window.web3.currentProvider)
      const { Transaction } = this.$FeathersVuex.api
      web3.eth
        .sendTransaction({
          from: this.account,
          to: this.recipientAddress,
          value: this.amount // 10017897970
        })
        .on('transactionHash', function (hash) {
          const txHash = {
            transactionHash: hash,
            transactionValue: amount
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
          console.log(receipt.transactionHash)
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
.q-card{
  height: 350px
}
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
