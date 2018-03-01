<template>
  <div class="movie-more">
    <div class="movie-more__body" v-if="pageName">
      <div class="movie-more__title">{{pageName}}</div>
      <div class="movie-more__content">
        <el-row :gutter="20">
          <el-col :span="8" v-for="(item, index) in allMovie" :key="index">
            <movie-card :data="item"></movie-card>
          </el-col>
        </el-row>
        <infinite-loading @infinite="onInfinite">
          <!-- 等待 -->
          <loading slot="spinner"></loading>
          <!-- 没有更多内容 -->
          <span slot="no-more">
            没有更多内容了
          </span>
          <!-- 没有相关结果，或者接口出错 -->
          <span slot="no-results">
            没有相关结果
          </span>
        </infinite-loading>
      </div>
      <div>{{message}}</div>
    </div>
    <div v-if="!pageName">404</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import InfiniteLoading from 'vue-infinite-loading'
import MovieCard from '../components/MovieCard'
import Loading from '../components/Loading'

var moveType = {
  nowintheater: '影院热映',
  watchonline: '免费在线观影',
  latest: '新片速递'
}
export default {
  name: 'movieMore',
  components: {
    InfiniteLoading,
    MovieCard,
    Loading
  },
  data () {
    return {
      pageName: '',
      type: '',
      message: ''
    }
  },
  methods: {
    onInfinite ($state) {
      this.$store.dispatch({
        type: 'loadMoreMovie',
        tag: this.type
      }).then(function (res) {
        $state.complete()
        // $state.loaded()
      }).catch(function () {
        $state.complete()
      })
    }
  },
  computed: {
    ...mapState({
      allMovie: state => state.movie.allMovie
    })
  },
  created () {
    console.log('test')
    this.type = this.$route.params && this.$route.params.type
    if (this.type) this.pageName = moveType[this.type]
    else this.pageName = false
  }
}
</script>

<style lang="scss" scoped>
  @function px($n) {
    @return ($n / 37.5)+rem;
  }
 .movie-more {
  padding-top: 1px;
    &__body {
      margin-top: px(15);
      text-align: left;
      padding: 0 px(20);
      color: #494949;
    }
    &__title {
      font-size: px(24);
    }
 }
</style>
