<!-- 搜索结果页面的分组 -->
<template>
  <div class="group">
    <div class="group__header">
      {{title}}
    </div>
    <div class="group__content">
      <div v-for="(item, index) in items" :key="index">
        <router-link
          :to="{
            name: 'Subject',
            params: {
              classify: item.subtype ? item.subtype : 'book',
              id: item.id
            }}">
          <div class="group-list">
            <div class="group-list__img">
              <img :src="item.images.small" alt="">
            </div>
            <div class="group-list__desc">
              <div class="group-list__title">
                {{item.title}}
              </div>
              <div class="group-list__rate" v-if="item.rating.average > 0">
                <rate :rate="item.rating.average" class="group-list__el-rate"></rate>
                <span class="group-list__score">
                  {{item.rating.average}}
                </span>
              </div>
              <div class="group-list__rate" v-if="item.rating.average <= 0">
                暂无评论
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <!-- 占位 -->
    <slot name="more"></slot>
  </div>
</template>

<script>
import rate from '../components/Rate.vue'
export default {
  name: 'group',
  props: {
    title: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  },
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

  .group {
    width: 100%;
    &__header {
      text-align: left;
      font-size: px(15);
      color: #aaa
    }
  }
  .group-list {
    padding: px(10) 0;
    display: flex;
    border-bottom: 1px solid #efefef;
    &__img {
      width: px(40);
      height: px(64);
      display: flex;
      align-items: center;
      overflow: hidden;
      img{
        width: 100%;
        height: auto;
      }
    }
    &__desc {
      flex: 1;
      text-align: left;
      padding-left: px(10);
    }
    &__title {
      font-size: px(17);
      color: #494949;
    }
    &__rate {
      margin-top: px(6);
      display: flex;
      align-items: center;
      font-size: px(12);
      color: #ccc;
    }
    &__score {
      font-size: px(12);
      color: #ccc;
      margin-left: px(6);
    }
  }
</style>
<style lang="scss">
  @function px($n) {
    @return ($n / 37.5)+rem;
  }
  .group {
    .group-list__el-rate {
      .el-rate__icon {
        font-size: px(12)
      }
    }
  }
</style>
