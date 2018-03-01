<!-- 左右滑动内容 -->
<template>
  <div class="scroller">
    <div class="scroller__header">
      <span class="scroller__type">{{title}}</span>
      <router-link :to="type" append>
        <span class="scroller__more">更多</span>
      </router-link>
    </div>
    <div class="scroller__content">
        <router-link :to="'subject/' + item.id" append  v-for="(item, index) in items" :key="index">
          <div class="scroller__list">
            <div class="scroller__img"><img :src="item.images.small" alt=""></div>
            <p class="scroller__name">{{item.title.length > 6? item.title.substring(0, 5)+'...' : item.title }}</p>
            <p class="scroller__no-rate" v-if="!item.rating.average">暂无评论</p>
            <div v-if="item.rating.average" class="scroller__rate-inner">
              <rate :rate="item.rating.average" class="scroller__rate"></rate>
              <span class="scroller__rate-num">{{item.rating.average}}</span>
            </div>
          </div>
        </router-link>
    </div>
  </div>
</template>

<script>
import rate from '../components/Rate.vue'
export default {
  name: 'scroller',
  props: ['title', 'type', 'items'],
  components: { rate },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  @function px($n) {
    @return ($n / 37.5)+rem;
  }
  p {
    margin: 0;
  }
  .scroller {
    &__header {
      display: flex;
      justify-content: space-between;
      padding: 0 px(15);
    }
    &__type {
      font-size: px(14);
    }
    &__more {
      font-size: px(14);
      color: #42bd56;
    }
    &__content {
      overflow-x: auto;
      white-space: nowrap;
      margin-top:px(2);
      padding: 0 px(5);
    }
    &__list {
      display: inline-block;
      width: px(110);
      padding: px(6);
      overflow: hidden;
    }
    &__img {
      height: px(142);
      width: 100%;
      display: flex;
      justify-content: center;
      overflow: hidden;
      img {
        width: auto;
        height: 100%;
      }
    }
    &__name {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: px(14);
      margin-top: px(6);
    }
    &__no-rate {
      font-size: px(12);
      color: #aaa;
      line-hight: px(16);
      margin-top: px(4);
    }
    &__rate-num {
      font-size: px(12);
    }
    &__rate-inner {
      display: flex;
      align-items: center;
      margin-top: px(4);
    }
  }
</style>
<style lang="scss">
  @function px($n) {
    @return ($n / 37.5)+rem;
  }
  .scroller__rate {
    .el-rate {
      height: auto;
    }
    .el-rate__icon {
      font-size: px(12);
      margin-right: px(2);
    }
  }
</style>
