<template>
<div>
 <hellometamask/>
 <createTransaction/>
</div>
</template>
<script>
import createTransaction from '../components/create-transaction'
import hellometamask from '../components/hello-metamask'
export default {
  name: 'account-info',
  beforeCreate () {
    console.log('registerWeb3 Action dispatched from account-info.vue')
    this.$store.dispatch('registerWeb3')
  },
  components: {
    hellometamask,
    createTransaction
  }
}
</script>
<style scoped>
</style>
