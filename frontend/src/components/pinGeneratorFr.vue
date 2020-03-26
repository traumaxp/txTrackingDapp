<template>
  <div class="q-pa-md row items-start q-gutter-md flex flex-center">
    <q-card
      style="min-width:400px; min-height: 350px"
      class="my-card"
    >
      <q-card-section>
        <div class="text-h6">PIN GENERATOR FRANCAIS</div>
      </q-card-section>
      <q-card-section>
        <div>
          <q-btn @click="generatePinFR"></q-btn>
        </div>
        {{pin}}
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
import translate from 'translate'
import randomWords from 'random-english-words'
export default {
  name: 'pinGeneratorFr',
  data: () => ({
    pin: ''
  }),
  methods: {
    generatePinFr () {
      let randomInt = Math.floor(Math.random() * (1000 - 100)) + 100
      co = randomWords({ minChars: 6 }) + randomInt
      const bar = await translate('Hello world', { to: 'es' })
      console.log(bar)
    }
  }
}
</script>
