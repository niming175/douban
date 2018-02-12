<!-- 搜索后的详情页 -->
<template>
  <div class="subject">
    <banner></banner>
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
      <div class="subject__img"></div>
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
