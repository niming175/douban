<template>
  <div class="movie">
    <scroller title="影院热映" type="hasCover" :items="hotMovie.subjects" class="movie__hot-movie"></scroller>
    <scroller title="免费在线观影" type="hasCover" :items="topMovie.subjects" class="movie__hot-movie"></scroller>
    <scroller title="新片速递" type="hasCover" :items="newMovie.subjects" class="movie__hot-movie"></scroller>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import scroller from '../components/Scroller.vue'

export default {
  name: 'movie',
  components: {
    scroller
  },
  computed: {
    ...mapState({
      hotMovie: state => state.movie.hotMovie,
      topMovie: state => state.movie.topMovie,
      newMovie: state => state.movie.newMovie
    })
  },
  methods: {
    getMovie: function () {
      this.$store.dispatch('getMovie')
    }
  },
  created () {
    this.getMovie()
  }
}
</script>

<style lang="scss" scoped>
  @function px($n) {
    @return ($n / 37.5)+rem;
  }
  .movie {
    padding-top: px(8);
    &__hot-movie {
      margin-top: px(10);
    }
  }
</style>
