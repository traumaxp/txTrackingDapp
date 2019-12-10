<template>
  <div class="q-pa-md row items-start q-gutter-md flex flex-center">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Create a TX</div>
      </q-card-section>
      <q-card-section>
        <div class="row">
          <div class="col">Amount to send :</div>
          <div class="col">
            <q-input outlined />
          </div>
        </div>
        <p>To:</p>
        <q-input outlined></q-input>
        <div>{{account}}</div>
        <div>
          <q-btn @click="sendEther" label="Send Ether" />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import sendEther from '../util/sendEther'
export default {
  name: 'create-transaction',
  computed: mapState({
    account: state => state.web3.account
  }),
  methods: {
    sendEther () {
      return sendEther(this.account)
    }
  }
}
</script>

<style>
.q-card {
  width: 70%
}
</style>>
