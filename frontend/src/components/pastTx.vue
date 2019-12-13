<template>
  <div class="q-pa-md row items-start q-gutter-md flex flex-center">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">All tx </div>
        <div>
    <ul>
      <!-- Step 4 -->
      <div v-for="transaction in transactions" :key="transaction._id">
        <div class="row">
            <div class="col"> Transaction Hash
        {{transaction.transactionHash}}
            </div>
            <div class="col"> Transaction Object
        {{transaction.transactionHash}}
            </div>
        </div>
      </div>
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
</style>
