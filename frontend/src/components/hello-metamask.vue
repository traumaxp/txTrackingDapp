<template>
  <div class="q-pa-md row items-start q-gutter-md flex flex-center">
    <q-card
      class="my-card"
    >
      <q-card-section>
            <p v-if="isInjected" id="has-metamask"><i aria-hidden="true" class="fa fa-check"></i> Metamask installed</p>
        <div class="text-h6">Network: {{ network }}</div>
      </q-card-section>

      <q-card-section>
    <p>Account: {{ account }}</p>
    <p>Balance: {{ balance }} Wei </p>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
import { NETWORKS } from '../util/constants/networks'
import { mapState } from 'vuex'
export default {
  name: 'hello-metamask',
  computed: mapState({
    isInjected: state => state.web3.isInjected,
    network: state => NETWORKS[state.web3.networkId],
    account: state => state.web3.account,
    balance: state => state.web3.balance
    // ethBalance: state => {
    //   if (state.web3.web3Instance !== null) return state.web3.web3Instance().fromWei(state.web3.balance, 'ether')
    // }
  })
}
</script>

<style scoped>
.metamask-info {
  text-align:center;
}
#has-metamask {
  color: green;
}
#no-metamask {
  color:red;
}</style>
