<template>
  <div class="list">
    <div v-if="mold === 'thumbnail'" v-for="(item, index) in items" :key="index" >
      <div class="list-content">
        <div class="list__left">
          <p class="list__title">{{item.title}}</p>
          <p class="list__text">{{item.content}}</p>
          <span class="list__tag"></span>
        </div>
        <div class="list__right">
        </div>
      </div>
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
  }
  // filters: {
  //   subStr: function (value) {
  //     let newVal = value(/<.*?>/g, '')
  //     return newVal.slice(0, 30)
  //   }
  // }
}
</script>
