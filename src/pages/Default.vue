<template>
  <div class="default">
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

<style lang="scss" scoped>
  @function px($n) {
    @return ($n / 37.5)+rem;
  }
  .default {
    margin-top: px(44)
  }
</style>
