<template>
  <div class="q-pa-md row items-start q-gutter-md flex flex-center">
    <q-card
      style="min-width:400px; min-height: 350px"
      class="my-card"
    >
      <q-card-section>
        <div class="text-h6">PIN GENERATOR</div>
      </q-card-section>
      <q-card-section>
        <div>
          <q-btn @click="generatePin"></q-btn>
        </div>
        {{pin}}
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
export default {
  name: 'pinGenerator',
  data: () => ({
    pin: ''
  }),
  methods: {
    generatePin () {
      this.pin = 'hello'
    }
  }
}
</script>
