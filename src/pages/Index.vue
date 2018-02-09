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
    <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">
      loading
    </infinite-loading>

  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import InfiniteLoading from 'vue-infinite-loading'
import List from '../components/List'

export default {
  name: 'index',
  components: {
    InfiniteLoading,
    List
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
    onInfinite () {
      setTimeout(() => {
        this.loadMore()
        // this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
      }, 1000)
    },
    ...mapActions([
      'loadMore'
    ])
  },
  mounted () {
    console.log(this.events)
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
