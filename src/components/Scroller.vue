<!-- 左右滑动内容 -->
<template>
  <div class="scroller">
    <div class="scroller__list" v-for="(item, index) in items" :key="index">
      {{item.title}}
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
