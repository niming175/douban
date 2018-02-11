<!-- 点击搜索的放大镜展开此页 -->
<template>
  <div class="search-page">
    <div class="search-page__header">
      <div class="search-page__close" @click="closeSearch">关闭</div>
      <input type="search" placeholder="请输入内容" v-model="searchWord" class="search-page__input" @keyup.enter="search()" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'search-page',
  data () {
    return {
      searchWord: ''
    }
  },
  methods: {
    closeSearch: function () {
      this.$emit('closeSearchPage')
    },
    /*
    * 点击回车后搜索
    * 1）关闭搜索页
    * 2）跳转到结果页
    * 3）将搜索关键字填充到url
    */
    search () {
      // 关闭搜索页面
      this.$emit('closeSearchPage')
      this.$router.push({
        name: 'SearchResPage',
        query: {
          // 将搜索的关键字填充到url
          word: this.searchWord
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  @function px($n) {
    @return ($n / 37.5)+rem;
  }

  .search-page {
    position: fixed;
    height: 100vh;
    width: 100vw;
    z-index: 99;
    background: #fff;
    top: 0;
    left: 0;
    &__header {
      display: flex;
      align-items: center;
      padding: px(15) px(15);
      border-bottom: 1px solid #efefef;
    }
    &__close {
      width: px(50);
      font-size: px(16);
      color: #42bd56;
      margin-right: px(6)
    }
    &__input {
      height: px(32);
    }
  }
</style>
<style lang="scss">
  .search-page__input {
    input {
      height: 100%;
    }
  }
</style>
