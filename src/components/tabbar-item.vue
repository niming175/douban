<template>
  <a class='tabbar-item' :class="{'is-active': isActive}" @click="$parent.$emit('input', id)">
    <span class="tabbar-item__icon">
      <slot name="icon"></slot>
    </span>
    <span class="tabbar-item__text">
      <slot></slot>
    </span>
  </a>
</template>

<script>
export default{
  props: ['id'],
  computed: {
    isActive () {
      if (this.$parent.value === this.id) {
        return true
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .tabbar-item {
    flex: 1;
    text-align: cebter;
    &__icon {
      display: block;
      padding-top: 2px;
    }
    &__text {
      display: block;
      font-size: 10px;
      color: #949494;
    }
    &.is-active {
      .tabbar-item__text {
        color: #42bd56;
      }
      .tabbar-item__icongit {
        color: #42bd56;
      }
    }
  }
</style>
