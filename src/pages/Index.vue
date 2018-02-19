<template>
  <div>
    <div class="submenu">
      <div class="submenu__item">影院热映</div>
      <div class="submenu__item">华语碟榜</div>
    </div>
    <div class="submenu">
      <div class="submenu__item">豆瓣时间</div>
      <div class="submenu__item">使用豆瓣</div>
    </div>
    <list mold="thumbnail" :items="events"></list>
    <infinite-loading @infinite="onInfinite">
      <!-- 等待 -->
      <loading slot="spinner"></loading>
      <!-- 没有更多内容 -->
      <span slot="no-more">
        没有更多内容了
      </span>
      <!-- 没有相过结果，或者接口出错 -->
      <span slot="no-results">
        没有相过结果
      </span>
    </infinite-loading>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import InfiniteLoading from 'vue-infinite-loading'
import List from '../components/List'
import loading from '../components/Loading'

export default {
  name: 'index',
  components: {
    InfiniteLoading,
    List,
    loading
  },
  data () {
    return {}
  },
  computed: {
    ...mapState({
      events: state => state.activities.events
    })
  },
  methods: {
    // 加载方式最新方式采用$state控制
    onInfinite ($state) {
      this.$store.dispatch({
        type: 'loadMore'
      }).then(res => {
        $state.loaded() // 继续加载
      }).catch(function () {
        $state.complete() // 停止加载
      })
    }
    // ...mapActions([
    //   'loadMore'
    // ])
  },
  mounted () {
  }
}
</script>

<style lang="scss">
  @function px($n) {
    @return ($n / 37.5)+rem;
  }

  .b-tabbar {
    &-item {
      padding: 15px 0;
    }
  }
  .submenu {
    width: 100%;
    padding: 0 px(10);
    display: flex;
    &__item {
      flex: 1;
      margin: 5px;
      background: #f6f6f6;
      padding: px(15) 0;
      text-align: center;
    }
  }
</style>
