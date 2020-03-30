<template>
  <div class="q-pa-md row items-start q-gutter-md flex flex-center">
    <q-card
      style="min-width:400px; min-height: 350px"
      class="my-card"
    >
      <q-card-section>
        <div class="text-h6">KEY GENERATOR</div>
      </q-card-section>
      <q-card-section>
        <div>
          <q-btn @click="generateKey"></q-btn>
        </div>
        {{publicKey}}
        {{privateKey}}
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
import ethWallet from 'ethereumjs-wallet'
export default {
  name: 'keyGeneration',
  data: () => ({
    publicKey: '',
    privateKey: ''
  }),
  methods: {
    generateKey () {
      for (let index = 0; index < 1; index++) {
        let addressData = ethWallet.generate()
        console.log(`Private Key = , ${addressData.getPrivateKeyString()} `)
        console.log(`Public address = , ${addressData.getAddressString()} `)
        this.publicKey = addressData.getAddressString()
        this.privateKey = addressData.getPrivateKeyString()
      }
    }
  }
}
</script>
