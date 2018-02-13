<template>
  <div>
    this is the page of movie
    <scroller title="热门电影" type="hasCover" :items="hotMovie.subjects"></scroller>
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
      hotMovie: state => state.movie.hotMovie
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
