import { mount } from '@vue/test-utils'
import Card from '../src/index.vue'

const AXIOM = 'I am a boy'

describe('Card.vue', () => {
  test('render test', () => {
    const wrapper = mount(Card, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })

  test('string header', () => {
    const header = 'I am header'
    const wrapper = mount(Card, {
      slots: {
        default: AXIOM,
      },
      props: {
        header,
      },
    })

    expect(wrapper.text()).toContain(header)
  })

  test('vnode header', () => {
    const headerClass = 'header-text'
    const btnClass = 'test-btn'
    const wrapper = mount(Card, {
      slots: {
        default: AXIOM,
        header: `<div>
          <span class="${headerClass}">card header</span>
          <button class="${btnClass}">click me</button>
        </div>`,
      },
    })

    expect(wrapper.find('.header-text').exists()).toBe(true)
    expect(wrapper.find('.test-btn').exists()).toBe(true)
  })

  test('body style', () => {
    const style = 'font-size: 14px;'
    const wrapper = mount(Card, {
      props: {
        slots: {
          default: AXIOM,
        },
        bodyStyle: style,
      },
    })

    expect(wrapper.find('.el-card__boady').attributes('style')).toBe(style)

  })

  test('shadow', () => {
    const shadow = 'test-shadow'
    const wrapper = mount(Card, {
      props: {
        slots: {
          default: AXIOM,
        },
        shadow,
      },
    })

    expect(wrapper.find(`.is-${shadow}-shadow`).exists()).toBe(true)
  })
})
