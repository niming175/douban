<!-- 搜索结果页 -->
<template>
  <div class="search-res">
  <input type="search" v-model="searchWord" placeholder="搜索 书 / 影 / 音" @keyup.enter="search()" class="search-res__input"/>
  <a href="javascript:void(0);" @click="search()">搜索</a>
  <div v-if="searchWord">
    <group title="影视" tag="movie" :items="res_movie.subjects">
      <a class="search-res__more" slot="more">更多影结果({{res_movie.total}})</a>
    </group>
    <group title="图书" tag="book" :items="res_book.books">
      <a class="search-res__more" slot="more">更多影结果({{res_book.total}})</a>
    </group>
    <group title="音乐" tag="music" :items="res_music.musics">
      <a class="search-res__more" slot="more">更多影结果({{res_music.total}})</a>
    </group>

  </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

import Group from '../components/Group.vue'

export default {
  name: 'search-res-page',
  components: { Group },
  data () {
    return {
      searchWord: ''
    }
  },
  computed: {
    ...mapState({
      res_movie: state => state.search.res_movie,
      res_book: state => state.search.res_book,
      res_music: state => state.search.res_music
    })
  },
  methods: {
    search: function () {
      if (this.searchWord) {
        this.$store.dispatch({
          type: 'search',
          tag: 'movie',
          word: this.searchWord
        })
        // 搜索图书
        this.$store.dispatch({
          type: 'search',
          tag: 'book',
          word: this.searchWord
        })
        // 搜索音乐
        this.$store.dispatch({
          type: 'search',
          tag: 'music',
          word: this.searchWord
        })
      }
    }
  },
  created () {
    this.searchWord = this.$route.query.word
    this.search()
  }
}
</script>

<style lang="scss" scoped>
  @function px($n) {
    @return ($n / 37.5)+rem;
  }
  .search-res {
    padding: 0 px(18);
    &__more {
      display: block;
      padding: px(10) 0;
      text-align: center;
      color: #42bd56;
      font-size: px(15);
      border-bottom: 1px solid #e3e2e2;
    }
  }
</style>
