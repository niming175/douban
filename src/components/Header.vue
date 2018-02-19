<!-- 头部的组件 -->
<template>
<div class="db-header">
  <a href="/"><div class="db-header__logo">豆瓣</div></a>
  <div class="db-header__menu">
    <a href="/movie"><span>电影</span></a>
    <a href="/book"><span>图书</span></a>
    <a href="/status"><span>广播</span></a>
    <a href="/group"><span>小组</span></a>
  </div>
  <div class="db-header__search-btn">
    <i class="el-icon-search" @click="showSearch"></i>
  </div>
</div>
</template>

<script>
export default {
  name: 'dbHeader',
  methods: {
    showSearch: function () {
      console.log('test')
      this.$emit('showSearch')
    }
  }
}
</script>

<style lang="scss" scope>
  // 移动端兼容
  @function px($n) {
    @return ($n / 37.5)+rem;
  }
  .db-header {
    position: fixed;
    top: 0;
    left: 0;
    height: px(44);
    display: flex;
    align-items: center;
    padding: px(8) px(15);
    width: 100%;
    border-bottom: 1px solid #efefef;
    background: #fff;
    &__logo {
      font-size: 30px;
      font-weight: 600;
      color: #00b51d;
    }
    &__menu {
      flex:1;
      text-align: right;
      padding-right: px(20);
      span {
        display: inline-blog;
        margin-right: px(5);
      }
    }
    &__search-btn {
      color: #00b51d;
      font-size: px(24);
    }
  }
</style>
