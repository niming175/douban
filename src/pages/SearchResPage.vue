<!-- 搜索结果页 -->
<template>
  <div class="search-res">
    结果页面
  <div v-if="searchWord">
    {{searchWord}}
  </div>
  </div>
</template>

<script>
export default {
  name: 'search-res-page',
  data () {
    return {
      searchWord: ''
    }
  },
  methods: {
  },
  created () {
    this.searchWord = this.$route.query.word
  }
}
</script>
