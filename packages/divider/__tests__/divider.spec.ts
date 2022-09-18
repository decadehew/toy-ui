import { mount } from '@vue/test-utils'
import Divider from '../src/index.vue'

const AXIOM = 'I am a boy'

describe('Devider.vue', () => {
  test('render test', () => {
    const wrapper = mount(Divider, {
      slots: {
        default: AXIOM,
      },
    })

    expect(wrapper.text()).toBe(AXIOM)
  })

  test('direction', () => {
    const wrapper = mount(Divider, {
      slots: {
        default: AXIOM,
      },
    })

    expect(wrapper.classes()).toContain('el-divider--vertical')
  })

  test('contentPosition', () => {
    const wrapper = mount(Divider, {
      slots: {
        default: AXIOM,
      },
      props: {
        contentPosition: 'right',
      },
    })

    expect(wrapper.find('.el-divider__text').classes()).toContain('is-right')
  })

  test('customClass', () => {
    const wrapper = mount(Divider, {
      props: {
        class: 'customClass',
      },
    })

    expect(wrapper.classes()).toContain('customClass')
  })

})
