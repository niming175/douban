<!-- 电影卡片 -->
<template>
  <div class="movie-card">
    <div class="movie-card__img">
      <img :src="data.images.small" alt="">
    </div>
    <div class="movie-card__name">{{data.title}}</div>
    <div class="movie-card__rate">
      <rate :rate="data.rating.average"></rate>
      <span class="movie-card__number">{{data.rating.average}}</span>
    </div>
  </div>
</template>

<script>
import Rate from '../components/Rate.vue'

export default {
  name: 'movie-card',
  props: {
    data: this.data
  },
  components: { Rate }
}
</script>

<style lang="scss" scoped>
  @function px($n) {
    @return ($n / 37.5)+rem;
  }
  .movie-card {
    width: 100%;
    margin-top: px(15);
    &__img {
      width: 100%;
      height: px(130);
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 100%;
        height: auto;
      }
    }
    &__name {
      font-size: px(13);
      text-align: center;
      margin-top: px(5);
      overflow:hidden;
      text-overflow:ellipsis;
      white-space:nowrap;
      width: 100%;
    }
    &__rate {
      margin-top: px(2);
      display: flex;
      align-items: center;
    }
    &__number {
      font-size: px(12);
    }
  }
</style>
<style lang="scss">
  @function px($n) {
    @return ($n / 37.5)+rem;
  }
  .movie-card {
    &__rate {
      .el-rate__icon {
        font-size: px(11);
        margin-right: px(2);
      }
    }
  }
</style>
