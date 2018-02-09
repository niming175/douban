<template>
  <div>
    详情页
    {{eventItem.title}}
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'detail',
  components: {},
  data () {
    return {}
  },
  computed: {
    ...mapState({
      eventItem: state => state.activities.eventItem
    })
  },
  created () {
    // 获取id参数
    const id = this.$route.params.id
    // 利用dispath 传值到api
    this.$store.dispatch({
      type: 'getSingleEvent',
      id: id
    }).then(function (res) {
    }).catch(function (err) {
    })
  }
}
</script>
<style lang="scss" scope>
</style>
