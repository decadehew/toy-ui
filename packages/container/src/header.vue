<template>
  <footer class="el-header" :style="{ height }">
    <slot></slot>
  </footer>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ElHeader',
  props: {
    height: {
      type: String,
      default: '60px',
    },
  },
})
</script>
<style scoped>
</style>
