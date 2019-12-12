<template>
  <div class="q-pa-md row items-start q-gutter-md flex flex-center">
    <q-card class="my-card">
      <q-card-section>
        <p v-if="isInjected" id="has-metamask">
          <i aria-hidden="true" class="fa fa-check"></i> Metamask installed
        </p>
        <div class="text-h6">Network: {{ network }}</div>
      </q-card-section>

      <q-card-section>
        <p>Account: {{ account }}</p>
        <p>Balance: {{ balance }} Wei</p>
      </q-card-section>
    </q-card>
    <q-card style="min-width:400px" class="my-card">
      <q-card-section>
        <div class="text-h6">Create a TX</div>
      </q-card-section>
      <q-card-section>
        Your address:
        <q-input outlined v-model="account"></q-input>
        <div>
          Send Ether to
          <q-input outlined v-model="recipientAddress"></q-input>e g 0x1889EF49cDBaad420EB4D6f04066CA4093088Bbd
          amount to send
          <q-input outlined v-model="amount">e.g 10017897970</q-input>10017897970
          <q-btn @click="sendAndSaveTx" label="Send Ether" />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
import Web3 from 'web3'
// import sendEther from '../util/sendEther'
import { NETWORKS } from '../util/constants/networks'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'hello-metamask',
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
    ...mapActions('transactions', ['patch']),
    sendAndSaveTx () {
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
          const newHash = {
            hash: hash
          }
          const transaction = new Transaction(newHash)
          transaction.save()
            .then(transaction => {
              console.log(transaction)
              txId = transaction._id
            })
        })
        .on('receipt', function (receipt) {
        })
        .on('confirmation', function (confirmationNumber, receipt) {
          console.log(confirmationNumber)
          console.log(receipt)
          if (confirmationNumber === 0) {
            const transaction = new Transaction({ id: txId, tx: receipt })
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
