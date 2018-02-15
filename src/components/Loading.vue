<template>
  <div class="loading">
    <img :src="img" alt="">
  </div>
</template>

<script>
import img from '../assets/images/common/loading.gif'
export default {
  name: 'loading',
  data () {
    return {
      img
    }
  }
}
</script>

<style lang="scss" scoped>
  .loading {
    text-align: center;
    margin-top: 20px;
    img {
      height: auto;
    }
  }
</style>
