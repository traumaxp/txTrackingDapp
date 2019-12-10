<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    // The user is automatically set by the feathers-vuex auth module upon login.
  },
  watch: {
    // When the user is set, redirect to the Chat page.
  }
}
</script>
