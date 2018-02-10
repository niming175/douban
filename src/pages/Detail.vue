<template>
  <div class="detail">
    <div class="detail__banner">
      <img :src="banner" alt="">
    </div>
    <div class="detail__title">{{eventItem.title}}</div>
    <div class="detail__time">{{eventItem.begin_time}}</div>
    <div v-html="content" class="content"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import banner from '../assets/images/common/banner_01.jpg'
export default {
  name: 'detail',
  components: {},
  data () {
    return {
      banner
    }
  },
  computed: {
    /* 替换内容
    * 因为豆瓣的接口图片会返回403错误，原因不明，所以需要对每个img标签的src进行修改
    * 利用全局替换
    * 1）先应正则获取所有img标签，在获取src内容
    * 2）对src内容再进行正则替换，将https:// 替换成https://images.weserv.nl/?url=
    */
    content: function () {
      return this.eventItem.content && this.eventItem.content.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi, function (match, capture) {
        if (capture) {
          let newUrl = capture.replace(/https:\/\//gi, 'https://images.weserv.nl/?url=')
          return `<img class='content__img' src=${newUrl} />`
        } else {
          return ''
        }
      })
    },
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
    }).then( function (res) {
    }).catch( function (err) {
    })
  }
}
</script>
<style lang="scss" scoped>
  @function px($n) {
    @return ($n / 37.5)+rem;
  }
  .detail {
    padding: 0 px(18);
    text-align:left;
    &__banner {
      margin: 0 px(-18);
      img {
        width: 100%;
        height: auto;
      }
    }
    &__title {
      font-size: px(24);
      line-height: px(32);
      font-weight: normal;
    }
    &__time {
      font-size: px(12);
      color: #ccc;
      line-height: px(24);
    }
    .content {
      margin-top: px(15);
    }
  }
</style>
<style lang="scss">
  @function px($n) {
    @return ($n / 37.5)+rem;
  }
  .detail{
    .content {
      text-align: left;
      font-size: px(14);
      line-height: px(22);
      color: #494949;
      &__img {
        width: 100%;
        height: auto;
      }
      object {
        width: 100% !important;
        overflow: hidden;
        border: 1px solid #efefef;
      }
      .video-title {
        font-size: px(12);
        text-align: center;;
        color: #666;
        margin-top: px(14);
      }
      .middle {
        margin-top: px(8)
      }
    }
  }
</style>
