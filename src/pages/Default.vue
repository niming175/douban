<template>
  <div>
    <db-header></db-header>
    <router-view></router-view>
  </div>
</template>

<script>
import dbHeader from '../components/Header.vue'

export default {
  name: 'default',
  components: {
    dbHeader
  }
}
</script>

<style>

</style>
