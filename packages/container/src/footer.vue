<template>
  <footer class="el-footer" :style="{ height }">
    <slot></slot>
  </footer>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ElFooter',
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
