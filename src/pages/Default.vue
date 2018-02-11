<template>
  <div class="default">
    <!-- 页头 -->
    <db-header @showSearch='open'></db-header>
    <!-- 搜索页面，初始状态为隐藏 -->
    <search-page v-if="showSearchPage" @closeSearchPage="close"></search-page>
    <router-view></router-view>
  </div>
</template>

<script>
import dbHeader from '../components/Header.vue'
import searchPage from './SearchPage.vue'
export default {
  name: 'default',
  components: {
    dbHeader,
    searchPage
  },
  data () {
    return {
      showSearchPage: false
    }
  },
  methods: {
    open: function () {
      this.showSearchPage = true
    },
    close: function () {
      this.showSearchPage = false
    }
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
