<template>
  <div class="q-pa-md row items-start q-gutter-md flex flex-center">
    <q-card class="my-card" style="min-width: 1200px">
      <q-card-section>
        <div>
    <ul>
      <!-- Step 4 -->
      <div v-for="transaction in transactions" :key="transaction._id">
        <div class="row">
            <tr class="col">
               <div>Tx Hash</div>
        <td class="text-left">{{transaction.transactionHash}}</td>
            </tr>
            <div class="col">
            </div>
            <div class="col">
            </div>
            <div class="col">
            </div>
            <div class="col">
            </div>
            <tr class="col">
            <div>Value</div>
            <td class="text-right">{{transaction.transactionValue}}</td>
            </tr>
            <tr class="col">
                <div>Block Number</div>
                <td class="text-right">{{transaction.transactionObject.blockNumber}}</td>
            </tr>
            <tr class="col">
                <div>Cumul. gas used</div>
        <td class="text-right">{{transaction.transactionObject.cumulativeGasUsed}}</td>
            </tr>
            <tr class="col">
            <div>gas used</div>
        <td class="text-right">{{transaction.transactionObject.gasUsed}}</td>
            </tr>
            <tr class="col">
        <td class="text-right">{{transaction.transactionObject.status}}</td>
            </tr>
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
  data: () => ({
  }),
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
