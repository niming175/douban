<template>
  <div class="user-bar">
    <div class="user-bar__img">
      <img src="" alt="">
    </div>
    <div class="user-bar__name">{{holder}}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'userBar',
  computed: {
    holder () {
      return this.currentUser.email ? this.currentUser.email : '请登陆'
    },
    ...mapGetters(['currentUser'])
  },
  created () {
    if (localStorage.getItem('email')) {
      this.$store.commit({
        type: 'getUserInfo'
      })
    }
  }
}
</script>
