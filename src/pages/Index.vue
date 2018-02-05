<template>
  <div>
    <tabbar class="tabbar" v-model="select">
      <tabbar-item v-for = "(item, index) in tabbarItemData" :key="index" :id="indexs">
        <span slot="icon">{{item.icon}}</span>
        {{item.name}}
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import tabbar from '../components/tabbar.vue';
import tabbarItem from '../components/tabbar-item';
export default {
  name: 'index',
  components: {
    tabbar,
    tabbarItem
  },
  data () {
    return {
      tabbarItemData: [
        {
          name: '首页',
          icon: 'test'
        }, {
          name: '影音',
          icon: 'test'
        }, {
          name: '广播',
          icon: 'test'
        }, {
          name: '小组',
          icon: 'test'
        }, {
          name: '我的',
          icon: 'test'
        }
      ],
      select: 'tab1'
    }
  }

}
</script>
