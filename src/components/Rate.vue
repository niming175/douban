<!-- 评分的五角星 -->
<template>
  <div class="rate" v-if="rate">
    <el-rate
      class="rate"
      v-model="rateValue"
      disabled
      :allow-half='true'
      text-color="#ff9900">
    </el-rate>
  </div>
</template>

<script>
export default {
  name: 'rate',
  props: [
    'rate'
  ],
  data () {
    return {
      rateValue: 0
    }
  },
  created () {
    this.rateValue = parseInt(this.rate) / 2
  }
}
</script>
<style lang="scss">
  .rate {
    .el-rate {
      height: auto;
    }
  }
</style>
