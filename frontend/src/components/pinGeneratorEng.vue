<template>
  <div class="q-pa-md row items-start q-gutter-md flex flex-center">
    <q-card
      style="min-width:400px; min-height: 350px"
      class="my-card"
    >
      <q-card-section>
        <div class="text-h6">PIN GENERATOR ENGLISH WORDS</div>
      </q-card-section>
      <q-card-section>
        <div>
          <q-btn @click="generatePinEng"></q-btn>
        </div>
        {{pin}}
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
import randomWords from 'random-english-words'
export default {
  name: 'pinGeneratorEng',
  data: () => ({
    pin: ''
  }),
  methods: {
    generatePinEng () {
      let randomInt = Math.floor(Math.random() * (1000 - 100)) + 100
      this.pin = randomWords({ minChars: 6 }) + randomInt
    }
  }
}
</script>
