<template>
<div>
 <hellometamask/>
</div>
</template>
<script>
import hellometamask from '../components/hello-metamask'
export default {
  name: 'account-info',
  beforeCreate () {
    console.log('registerWeb3 Action dispatched from account-info.vue')
    this.$store.dispatch('registerWeb3')
  },
  components: {
    hellometamask
  }
}
</script>
<style scoped>
</style>
