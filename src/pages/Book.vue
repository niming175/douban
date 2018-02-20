<!-- 图书页面 -->
<template>
  <div class="book">
    <scroller title="受关注图书 | 虚构类" type="hasCover" :items="novel.books" class="book__scroller"></scroller>
    <scroller title="受关注图书 | 非虚构类" type="hasCover" :items="reality.books" class="book__scroller"></scroller>
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
      novel: state => state.book.novel,
      reality: state => state.book.reality
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
<style lang="scss" scoped>
  @function px($n) {
    @return ($n / 37.5)+rem;
  }
  .book {
    padding: px(1) 0;
    &__scroller {
      margin-top: px(10);
    }
  }
</style>
