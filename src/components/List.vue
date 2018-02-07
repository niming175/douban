<template>
  <div class="list">
    <div v-for="(item, index) in items" :key="index">
      <h3>{{item.title}}</h3>
      <p>{{item.content | subStr}}</p>
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
    return {}
  }
  // filters: {
  //   subStr: function (value) {
  //     let newVal = value(/<.*?>/g, '')
  //     return newVal.slice(0, 30)
  //   }
  // }
}
</script>
