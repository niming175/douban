<template>
  <div class="login">
    <div class="login__header header">
      <span class="header__cancel-btn">取消</span>
      <span class="header__title">登陆豆瓣</span>
    </div>
    <div class="login__body">
      <input type="text" placeholder="手机号 / 邮箱" class="login__input-phone" />
      <input type="password" placeholder="Token" class="login__input-pws" />
      <button class="login__btn">登陆</button>
      <div class="login__use-other">
        <a href="">使用其他方式登陆</a> &amp;
        <a href="">找回密码</a>
      </div>
    </div>
    <div class="login__footer">
      <a href="">注册豆瓣账号</a>
      <a href="">下载豆瓣App</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login'
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
  }
</style>