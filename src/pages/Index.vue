<template>
  <div>
    <db-header></db-header>
    <div class="submenu">
      <div class="submenu__item">影院热映</div>
      <div class="submenu__item">华语碟榜</div>
    </div>
    <div class="submenu">
      <div class="submenu__item">豆瓣时间</div>
      <div class="submenu__item">使用豆瓣</div>
    </div>

    <count></count>
    <tabbar class="d-tabbar" v-model="select">
      <tabbar-item class="b-tabbar-item" v-for = "(item, index) in tabbarItemData" :key="index" v-bind:id="index">
        <span slot="icon">
          <i class="d-tabbar__icon" :class="item.icon"></i>
        </span>
        {{item.name}}
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import tabbar from '../components/tabbar.vue'
import tabbarItem from '../components/tabbar-item'
import dbHeader from '../components/Header.vue'
import count from '../components/count.vue'

export default {
  name: 'index',
  components: {
    tabbar,
    tabbarItem,
    dbHeader,
    count
  },
  data () {
    return {
      tabbarItemData: [
        {
          name: '首页',
          icon: 'el-icon-menu'
        }, {
          name: '影音',
          icon: 'el-icon-service'
        }, {
          name: '广播',
          icon: 'el-icon-mobile-phone'
        }, {
          name: '小组',
          icon: 'el-icon-tickets'
        }, {
          name: '我的',
          icon: 'el-icon-mobile-phone'
        }
      ],
      select: 'tab1'
    }
  },
  methods: {
  },
  mounted () {
    console.log('test')
  }
}
</script>

<style lang="scss">
  @function px($n) {
    @return ($n / 37.5)+rem;
  }

  .b-tabbar {
    &-item {
      padding: 15px 0;
    }
  }
  .submenu {
    width: 100%;
    padding: 0 px(10);
    display: flex;
    &__item {
      flex: 1;
      margin: 5px;
      background: #f6f6f6;
      padding: px(15) 0;
      text-align: center;
    }
  }
</style>
