<template>
  <span :class="avatarClass" :style="sizeStyle">
    <img
      v-if="(src || srcSet) && !hasLoadError"
      :src="src"
      :alt="alt"
      :srcset="srcSet"
      :style="{objectFit: fit}"
      @error="handleError"
    >
    <i v-else-if="icon" :class="icon"></i>
    <slot v-else></slot>
  </span>
</template>
<script lang='ts'>
import { defineComponent, ref, computed } from 'vue'
export default defineComponent({
  name: 'ElAvatar',
  props: {
    size: {
      type: [Number, String],
      default: 'small',
      validator(val) {
        if (typeof val === 'string') {
          return ['large', 'medium', 'small'].includes(val)
        }
        return typeof val === 'number'
      },
    },
    shape: {
      type: String,
      default: 'circle',
      validator(val: string) {
        return ['circle', 'square'].includes(val)
      },
    },
    icon: String,
    src: String,
    alt: String,
    srcSet: String,
    error: Function,
    fit: {
      type: String,
      default: 'cover',
    },
  },
  emits: ['error'],
  setup(props, ctx) {
    const hasLoadError = ref(false)
    const avatarClass = computed(() => {
      const { size, icon, shape } = props
      let classList = ['el-avatar']
      if (size && typeof size === 'string') {
        classList.push(`el-avatar--${size}`)
      }
      if (icon) {
        classList.push('el-avatar--icon')
      }
      if (shape) {
        classList.push(`el-avatar--${shape}`)
      }
      return classList
    })
    const sizeStyle = computed(() => {
      const { size } = props
      return typeof size === 'number' ? {
        height: `${size}px`,
        width: `${size}px`,
        lineHeight: `${size}px`,
      } : {}
    })
    const handleError = (e: Event) => {
      hasLoadError.value = true
      ctx.emit('error', e)
    }
    return {
      hasLoadError,
      avatarClass,
      sizeStyle,
      handleError,
    }
  },
})
</script>
<style scoped>
</style>
