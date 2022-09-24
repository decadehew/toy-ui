<template>
  <aside class="el-aside" :style="{width}"></aside>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ElAside',
  props: {
    width: {
      type: String,
      default: '300px',
    },
  },
})
</script>
