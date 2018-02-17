<template>
  <div class="login">
    <div class="login__header header">
      <span class="header__cancel-btn">取消</span>
      <span class="header__title">登陆豆瓣</span>
    </div>
    <div class="login__body">
      <form @submit.prevent="onSubmit()">
        <input type="text" v-model="email" name="email" @input="updateInfo" placeholder="手机号 / 邮箱" class="login__input-phone" />
        <input type="password" v-model="token" name="token" @input="updateInfo" placeholder="Token" class="login__input-pws" />
        <button class="login__btn">登陆</button>
      </form>
      <div class="login__use-other">
        <a href="">使用其他方式登陆</a> &amp;
        <a href="">找回密码</a>
      </div>
    </div>
    <div class="login__footer">
      <a href="">注册豆瓣账号</a>&nbsp;&nbsp;<a href="">下载豆瓣App</a>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'login',
  computed: {
    ...mapState({
      email: state => state.userInfo.temp_email,
      token: state => state.userInfo.temp_token
    })
  },
  methods: {
    // 动态输入
    updateInfo (e) {
      console.log(e)
      this.$store.commit({
        type: 'updateInfo',
        name: e.target.name,
        value: e.target.value
      })
    },
    onSubmit () {
      this.$store.dispatch({
        type: 'login',
        email: this.email,
        token: this.token
      }).then(res => {
        this.onSuccess()
      })
    },
    // 登陆成功
    onSuccess () {
      this.$router.push({name: 'Status'})
    },
    onError () {
      alert('error')
    }
  },
  // 路由钩子， 在进入之前，判断是否在线
  beforeRouteEnter (to, from, next) {
    next(vm => {
      console.log(vm)
      if (vm.$store.getters.currentUser.email) {
        vm.$router.push({name: 'Status'})
      } else {
        next()
      }
    })
  },
  created () {
    // 判断是否已经是登陆状态，是的话，直接跳转到下一个页面
    if (localStorage.getItem('email')) {
      this.$store.commit({
        type: 'getUserInfo'
      })
    }
  }
}
</script>

<style lang="scss" scopd>
  @function px($n) {
    @return ($n / 37.5)+rem;
  }
  .login {
    &__header {
      height: px(48);
      text-align: center;
      line-height: px(48);
      border: 1px solid #efefef;
    }
    .header {
      position: relative;
      &__cancel-btn {
        position: absolute;
        top: 0;
        line-height: px(48);
        left: px(15);
        color: #42bd56;
        font-size: px(14);
      }
      &__title {
        font-weight: 600;
      }
    }
    &__body {
      margin-top: px(30);
      padding: 0 px(20);
      input {
        display: block;
        width: 100%;
        padding: px(8) px(8);
        height: px(52);
        font-size: px(14);
        border-color: #ccc;
        border-style: solid;
        border-width: 1px;
      }
    }
    .login__input-phone {
      border-radius: px(3) px(3) 0 0;
      border-bottom: none;
    }
    .login__input-pws {
      border-radius: 0 0 px(3) px(3);
      border-top: -1px;
    }
    &__btn {
      margin-top: px(16);
      width: 100%;
      padding: px(10);
      font-size: px(18);
      text-align: center;
      color: #fff;
      background: #17AA52;
      border: 0.1rem solid #17AA52;
      border-radius: px(3);
    }
    &__use-other {
      margin-top: px(20);
      font-size: px(13);
      color: #aaa;
      a {
        color: #aaa;
      }
    }
    &__footer {
      margin-top: px(20);
      font-size: px(13);
      a {
        color: #42bd56;
      }
    }
  }
</style>
