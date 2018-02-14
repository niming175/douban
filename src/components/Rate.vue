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
  props: {
    rate: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      rateValue: 0
    }
  },
  created () {
    this.rateValue = this.rate / 2
    console.log(this.rateValue)
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
