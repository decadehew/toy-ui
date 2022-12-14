<template>
  <label
    :class="[
      'el-radio-button',
      size ? 'el-radio-button--' + size : '',
      { 'is-active': value === label },
      { 'is-disabled': isDisabled },
      { 'is-focus': focus }
    ]"
    role="radio"
    :aria-checked="value === label"
    :aria-disabled="isDisabled"
    :tabindex="tabIndex"
    @keydown.space.stop.prevent="value = isDisabled ? value : label"
  >
    <input
      v-model="value"
      class="el-radio-button__orig-radio"
      :value="label"
      type="radio"
      :name="name"
      :disabled="isDisabled"
      tabindex="-1"
      @change="handleChange"
      @focus="focus = true"
      @blur="focus = false"
    >
    <span
      class="el-radio-button__inner"
      :style="value === label ? activeStyle : null"
      @keydown.stop
    >
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>
<script lang='ts'>
import { defineComponent, computed } from 'vue'
import useRadio from './useRadio'

export default defineComponent({
  name: 'ElRadioButton',
  props: {
    label: {
      type: [Boolean, String, Number],
      default: '',
    },
    disabled: Boolean,
    name: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const radioUse = useRadio()
    const isGroup = radioUse.isGroup
    const _radioGroup = radioUse._radioGroup
    const _elFormItemSize = radioUse._elFormItemSize
    const ELEMENT = radioUse.ELEMENT
    const focus = radioUse.focus
    const elForm = radioUse.elForm
    const size = computed(() => {
      return _radioGroup.radioGroupSize || _elFormItemSize || (ELEMENT || {} as any).size
    })
    const isDisabled = computed(() => {
      return props.disabled || _radioGroup.disabled || (elForm || {} as any).disabled
    })
    const tabIndex = computed(() => {
      return (isDisabled.value || (_radioGroup && value.value !== props.label)) ? -1 : 0
    })
    const value = computed({
      get() {
        return _radioGroup.modelValue?.value
      },
      set(value) {
        _radioGroup.changeEvent(value)
      },
    })
    const activeStyle = computed(() => {
      return {
        backgroundColor: _radioGroup.fill || '',
        borderColor: _radioGroup.fill || '',
        boxShadow: _radioGroup.fill ? `-1px 0 0 0 ${_radioGroup.fill}` : '',
        color: _radioGroup.textColor || '',
      }
    })
    return {
      isGroup,
      size,
      isDisabled,
      tabIndex,
      value,
      focus,
      activeStyle,
    }
  },
})
</script>
<style scoped>
</style>
