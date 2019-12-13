<template>
  <div class="q-pa-md row items-start q-gutter-md flex flex-center">
    <q-card style="min-width:400px" class="my-card">
      <q-card-section>
        <div class="text-h6">All tx </div>
        <div>
    <ul>
      <!-- Step 4 -->
      <li v-for="transaction in transactions" :key="transaction._id">
        {{transaction.transactionObject}}
      </li>
    </ul>
  </div>
      </q-card-section>
      <q-card-section>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
import { makeFindMixin } from 'feathers-vuex' // Step 1
export default {
  name: 'sendTx',
  mixins: [ makeFindMixin({
    service: 'transactions'
  })], // Step 2
  computed: {
    transactionsParams () {
      return { query: {} } // Step 3
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
