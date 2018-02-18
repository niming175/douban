<template>
  <div class="status">
    <banner class="status__banner"></banner>
    <user-bar></user-bar>
  </div>
</template>
<script>
import banner from '../components/Banner01'
import userBar from '../components/userBar'
export default {
  name: 'status',
  components: {
    banner,
    userBar
  }
}
</script>
