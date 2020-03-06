<template>
  <div class="q-pa-md row items-start q-gutter-md flex flex-center">
    <q-card class="my-card" style="min-width: 1200px">
      <q-card-section class="text-body1">
        Analyse tx
      </q-card-section>
      <q-separator/>
      <q-card-section>
        <q-input label="Tx hash"/>
      </q-card-section>
      <q-card-section>
        {{data}}
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
export default {
  name: 'txDecode',
  data: () => ({
    data: 'data'
  })
}
</script>

<style lang="sass">
.q-card
  height: 350px
</style>
