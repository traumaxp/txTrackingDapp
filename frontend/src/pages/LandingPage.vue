<template>
<q-page class="flex flex-center">
<div class="row">
  <div class="col">
 <hellometamask/>
  </div>
  <div class="col">
 <sendTx/>
  </div>
  <pastTx/> <!-- HERE the load tx component-->
</div>
<div>
</div>
</q-page>
</template>
<script>
import hellometamask from '../components/hello-metamask'
import sendTx from '../components/sendTx'
import pastTx from '../components/pastTx'
export default {
  name: 'LandingPage',
  beforeCreate () {
    console.log('registerWeb3 Action dispatched from account-info.vue')
    this.$store.dispatch('registerWeb3')
  },
  components: {
    hellometamask,
    sendTx,
    pastTx
  }
}
</script>
<style scoped>
</style>
