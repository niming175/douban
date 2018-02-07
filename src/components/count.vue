<template>
  <div class="count">
    <h2>{{msg}}</h2>
    <hr/>
    <h3>{{$store.state.count}}</h3>
    <div>
      <button @click="add">+</button>
      <button @click="reduce">-</button>
    </div>
  </div>
</template>
<script>
import store from '@/vuex/store'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'count',
  data () {
    return {
      msg: 'Hello Vuex'
    }
  },
  store,
  methods:mapMutations([
    'add', 'reduce'
  ])
}
</script>
