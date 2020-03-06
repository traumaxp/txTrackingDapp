<template>
<q-page class="flex flex-center">
 <hellometamask/>
 <sendTx/>
    <!-- <pastTx/> -->
    <txDecode/>
</q-page>
</template>
<script>
import txDecode from '../components/txDecode.vue'
import hellometamask from '../components/hello-metamask'
import sendTx from '../components/sendTx'
// import pastTx from '../components/pastTx'
export default {
  name: 'LandingPage',
  beforeCreate () {
    console.log('registerWeb3 Action dispatched from account-info.vue')
    this.$store.dispatch('registerWeb3')
  },
  components: {
    txDecode,
    hellometamask,
    sendTx
  }
}
</script>
<style scoped>
</style>
