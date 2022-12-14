<template>
  <label
    :class="[
      'el-radio',
      {
        [`el-radio--${radioSize || ''}`]: border && radioSize,
        'is-disabled': isDisabled,
        'is-focus': focus,
        'is-bordered': border,
        'is-checked': model === label
      }
    ]"
    role="radio"
    :aria-checked="model === label"
    :aria-disabled="isDisabled"
    :tabindex="tabIndex"
    @keydown.space.stop.prevent="model = isDisabled ? model : label"
  >
    <span
      :class="[
        'el-radio__input',
        {
          'is-disabled': isDisabled,
          'is-checked': model === label
        }
      ]"
    >
      <span class="el-radio__inner"></span>
      <input
        ref="radio"
        v-model="model"
        class="el-radio__original"
        :value="label"
        type="radio"
        aria-hidden="true"
        :name="name"
        :disabled="isDisabled"
        tabindex="-1"
        @focus="focus = true"
        @blur="focus = false"
        @change="handleChange"
      >
    </span>
    <span class="el-radio__label" @keydown.stop>
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>
<script lang='ts'>
import { defineComponent, computed, getCurrentInstance, nextTick } from 'vue'
import useRadio from './useRadio'

export default defineComponent({
  name: 'ElRadio',
  props: {
    modelValue: {
      type: [Boolean, String, Number],
      default: '',
    },
    label: {
      type: [Boolean, String, Number],
      default: '',
    },
    disabled: Boolean,
    name: {
      type: String,
      default: '',
    },
    border: Boolean,
    size: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    const radioUse = useRadio()
    const isGroup = radioUse.isGroup
    const _radioGroup = radioUse._radioGroup
    const _elFormItemSize = radioUse._elFormItemSize
    const ELEMENT = radioUse.ELEMENT
    const focus = radioUse.focus
    const elForm = radioUse.elForm
    const instance = getCurrentInstance()
    const model = computed({
      get() {
        return isGroup.value ? _radioGroup.modelValue.value : props.modelValue
      },
      set(val) {
        if (isGroup.value) {
          _radioGroup.changeEvent(val)
        } else {
          emit('update:modelValue', val)
        }
        instance.refs.radio && (instance.refs.radio.checked = props.modelValue === props.label)
      },
    })
    const tabIndex = computed(() => {
      return (isDisabled.value || (isGroup.value && model.value !== props.label)) ? -1 : 0
    })
    const isDisabled = computed(() => {
      return isGroup.value
        ? _radioGroup.disabled || props.disabled || (elForm || {}).disabled
        : props.disabled || (elForm || {}).disabled
    })
    const radioSize = computed(() => {
      const temRadioSize = props.size || _elFormItemSize || (ELEMENT || {}).size
      return isGroup.value
        ? _radioGroup.radioGroupSize || temRadioSize
        : temRadioSize
    })
    function handleChange() {
      nextTick(() => {
        emit('change', model.value)
      })
    }
    return {
      focus,
      isGroup,
      isDisabled,
      model,
      tabIndex,
      radioSize,
      handleChange,
    }
  },
})
</script>
<style scoped>
</style>
