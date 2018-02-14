<!-- 图书页面 -->
<template>
  <div class="book">
    <scroller title="受关注图书 | 虚构类" type="hasCover" :items="novel.books"></scroller>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import scroller from '../components/Scroller.vue'

export default {
  name: 'Book',
  components: { scroller },
  computed: {
    ...mapState({
      novel: state => state.book.novel
    })
  },
  methods: {
    getBook () {
      this.$store.dispatch('getBook')
    }

  },
  created () {
    this.getBook()
  }
}
</script>
