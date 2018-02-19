<template>
  <div class="user-bar">
    <img :src="head" alt="" class="user-bar__img">
    <div class="user-bar__name">{{holder}}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import head from '../assets/images/user/header_01.png'

export default {
  name: 'userBar',
  computed: {
    holder () {
      return this.currentUser.email ? this.currentUser.email : '请登陆'
    },
    ...mapGetters(['currentUser'])
  },
  data () {
    return {
      head
    }
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

<style lang="scss" scoped>
  @function px($n) {
    @return ($n / 37.5)+rem;
  }
  .user-bar {
    display: flex;
    height: px(60);
    padding: px(5) px(15);
    align-items: center;
    border-bottom: 1px solid #efefef;
    &__img {
      height: px(48);
      width: px(48);
      border-radius: 50vh;
    }
    &__name {
      margin-left: px(10);
      font-size: px(15);
      color: #aaa;
    }
  }
</style>
