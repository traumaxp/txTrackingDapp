<template>
  <div class="q-pa-md row items-start q-gutter-md flex flex-center">
    <q-card class="my-card" style="min-width: 1250px">
      <q-card-section>
        <div>
    <ul>
      <!-- Step 4 -->
      <div v-for="transaction in transactions" :key="transaction._id">
        <div class="row">
            <div class="col">
               <div>Tx Hash</div>
        {{transaction.transactionHash}}
            </div>
            <div class="col">
            </div>
            <div class="col">
            </div>
            <div class="col">
            </div>
            <div class="col">
                <div>Value</div>
        {{transaction.transactionValue}}
            </div>
            <div class="col">
                <div>Block Number</div>
        {{transaction.transactionObject.blockNumber}}
            </div>
            <div class="col">
                <div>Cumulative gas used</div>
        {{transaction.transactionObject.cumulativeGasUsed}}
            </div>
            <div class="col">
            <div>gas used</div>
        {{transaction.transactionObject.gasUsed}}
            </div>
            <div class="col">
                <div>Transaction Status</div>
        {{transaction.transactionObject.status}}
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
