<template>
  <button
    class="el-button"
    @click="handleClick"
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      type ? 'el-button--' + type : '',
      buttonSize ? 'el-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle
      }
    ]"
  >
   <i class="el-icon-loading" v-if="loading"></i> 
   <i class="icon" v-if="icon && !loading"></i>
   <span v-if="$slots.default">
    <slot />
   </span>
  </button>
</template>
<script>
export default {
  name: 'ElButton'
}
</script>
<script setup>
import { emit } from 'process';
import { computed, inject } from 'vue'
const ELEMENT = {}

const props = defineProps({
  type: {
    type: String,
    default: 'default'
  },
  size: String,
  icon: {
    type: String,
    default: ''
  },
  nativeType: {
    type: String,
    default: 'button'
  },
  loading: Boolean,
  disabled: Boolean,
  plain: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean
})
const emits = defineEmits(['click'])

const handleClick = (e) => {
  emits('click', e)
}

const elForm = inject('elForm', '')
const elFormItem = inject('elFormItem', '')
const _elFormItemSize = computed(() => {
  return (elFormItem || {}).elFormItemSize
})
const buttonSize = computed(() => {
  return props.size || _elFormItemSize.value || (ELEMENT || {}).size
})
const buttonDisabled = computed(() => {
  return props.disabled || (elForm || {}).disabled
})

</script>
<style lang=""></style>
