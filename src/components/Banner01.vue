<!-- banner 01 -->
<template>
  <div class="banner">
    <img :src="banner" alt="">
  </div>
</template>

<script>
import banner from '../assets/images/common/banner_01.jpg'
export default {
  name: 'banner',
  data () {
    return {
      banner
    }
  }
}
</script>

<style lang="scss" scoped>
  .banner {
    width: 100%;
    img {
      width: 100%;
      height: auto;
    }
  }
</style>
