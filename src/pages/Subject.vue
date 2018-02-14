<!-- 搜索后的详情页 -->
<template>
  <div class="subject">
    <banner></banner>
    <div class="subject__body">
      <div class="subject__title">{{subject.title}}</div>
      <div class="subject__content">
        <div class="subject__desc">
          <div class="subject__rate-inner">
            <rate :rate="subject.rating.average" class="subject__rate"></rate>
            <span class="subject__rate-average">{{subject.rating.average}}</span>
            <span class="subject__rate-count">{{subject.ratings_count}}人评价</span>
            <!-- 标签信息 -->
          </div>
          <div class="subject__tags" v-if="subjectTag">
            {{subjectTag}}
          </div>
        </div>
        <div class="subject__img">
          <img :src="subject.images.small" alt="">
        </div>
      </div>
      <div class="subject__btn-inner">
        <el-row :gutter="20">
          <el-col :span="12">
            <a href="/login" class="subject__btn-1">想看</a>
          </el-col>
          <el-col :span="12">
            <a href="/login" class="subject__btn-1">看过</a>
          </el-col>
        </el-row>
      </div>
      <a href="/login" class="subject__btn-2">在APP上保留你的足迹</a>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import banner from '../components/Banner01.vue'
import rate from '../components/Rate.vue'

export default {
  name: 'subject',
  components: {
    banner,
    rate
  },
  computed: {
    ...mapState({
      subject: state => state.subject.subject
    }),
    // 工具函数
    ...mapGetters({
      subjectTag: 'subjectTag' // 标签
    })

  },

  created () {
    const id = this.$route.params.id
    const classify = this.$route.params.classify // 类型
    console.log(id)
    this.$store.dispatch({
      type: 'getSingleSubject',
      id: id,
      classify: classify
    }).then(function (res) {
      console.log(res)
    })
  }
}
</script>

<style lang="scss" scoped>
  @function px($n) {
    @return ($n / 37.5)+rem;
  }
  .subject {
    &__body {
      padding: 0 px(15);
    }
    &__content {
      display: flex;
    }
    &__desc {
      flex: 1;
    }
    &__title {
      text-align: left;
      margin-top: px(30);
      font-size: px(24);
    }
    &__rate-inner {
      display: flex;
      align-items: center;
      margin-top: px(5);
      font-size: px(14);
    }
    &__rate-count {
      margin-left: px(10);
      color: #ccc;
    }
    &__tags {
      margin-top: px(15);
      font-size: px(14);
      line-height: 1.6;
      text-align: left;
    }
    &__img {
      width: px(100);
      height: px(140);
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      img {
        width: auto;
        height: 100%;
      }
    }
    &__btn-inner {
      margin-top: px(30)
    }
    &__btn-1 {
      display: block;
      padding: px(6);
      border: 1px solid #ffb712;
      border-radius: px(3);
      font-size: px(15);
      color: #ffb712;
    }
    &__btn-2 {
      display: block;
      padding: px(6);
      border:1px solid #42bd56;
      color: #42bd56;
      border-radius: px(3);
      font-size: px(15);
      margin-top: px(8);
    }
  }
</style>
<style lang="scss">
  @function px($n) {
    @return ($n / 37.5)+rem;
  }
  .subject {
    .el-rate__icon{
      font-size: px(12)
    }
  }
</style>
