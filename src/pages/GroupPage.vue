<!-- 小组页面 -->
<template>
  <div class="group">
    this is group page
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'groupPage',
  data () {
    return {}
  },
  computed: {
    ...mapState({
      group: state => state.group.group
    })
  },
  created () {
    this.$store.dispatch('getGroup')
  }
}
</script>
