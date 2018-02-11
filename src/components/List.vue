<template>
  <div class="list">
    <div v-if="mold === 'thumbnail'" v-for="(item, index) in items" :key="index" >
      <router-link :to="{name: 'Detail', params: {id: item.id}}">
        <div class="list-content">
          <div class="list-content__con">
            <div class="list__left">
              <p class="list__title">{{item.title.substring(0, 20)}}...</p>
              <p class="list__text">{{item.content | subStr(30)}}</p>
            </div>
            <div class="list__right">
              <img :src="item.image" alt="">
            </div>
          </div>
          <div class="list-content__tag">
            <span v-if="item.category_name">by <span>{{item.category_name}}</span></span>
            <span v-if="item.subcategory_name">本栏目来自 {{item.subcategory_name}}</span>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',
  props: {
    mold: {
      type: String,
      defult: 'basic'
    },
    items: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      testitems: this.items
    }
  },
  mounted () {
    console.log(this.testitems)
  },
  filters: {
    // 去掉html的标签
    subStr: function (value, n) {
      let newVal = value.replace(/<.*?>/g, '')
      return newVal.slice(0, n)
    }
  }
}
</script>
<style lang="scss" scope>
  @function px($n) {
    @return ($n / 37.5)+rem;
  }
  .list {
    color: #494949;
    width: 100%;
    background: #fff;
    padding: 0 px(15);
    .list-content {
      width: 100%;
      text-align: left;
      padding: px(25) 0;
      border-bottom: 1px solid rgba(0, 0, 0, .15);
      &__con {
        display: flex;
      }
      &__tag {
        display: flex;
        justify-content: space-between;
        color: #ccc;
        font-size: px(12);
        span {

        }
      }
    }
    &__left {
      flex: 1;
    }
    &__right {
      height: px(87);
      width: px(87);
      margin-left: px(25);
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #ccc;
      img {
        width: 100%;
        height: auto;
      }
    }
    &__title {
      font-size: px(17);
      color: #494949;
      line-height: 1.41;
      margin: 0;
    }
    &__text {
      font-size: px(12);
      color: #aaa;
      margin-top: px(6);
      line-height: 1.5;
    }
  }
</style>
