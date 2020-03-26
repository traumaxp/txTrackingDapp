<template>
  <q-page class="q-pa-xl">
    <div class="row">
      <div>
        <hellometamask />
      </div>
      <div>
        <keyGeneration />
      </div>
      <PinGenerator />
    </div>
    <!-- <txDecode/> -->
  </q-page>
</template>
<script>
import PinGenerator from '../components/pinGenerator'
// import txDecode from '../components/txDecode.vue'
import hellometamask from '../components/hello-metamask'
// import sendTx from '../components/sendTx'
import keyGeneration from '../components/keyGeneration'
// import pastTx from '../components/pastTx'
export default {
  name: 'LandingPage',
  beforeCreate () {
    console.log('registerWeb3 Action dispatched from account-info.vue')
    this.$store.dispatch('registerWeb3')
    this.$store.dispatch('getTokensBalance')
  },
  components: {
    hellometamask,
    PinGenerator,
    // txDecode,
    // sendTx,
    keyGeneration
  }
}
</script>
<style lang="sass">
.q-card
  min-width: 90%

</style>
