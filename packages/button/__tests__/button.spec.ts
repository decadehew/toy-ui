import { mount, config } from '@vue/test-utils'
import Button from '../src/index.vue'

const AXIOM = 'I am a boy'
const COMMON_CONFIG = {
  global: {
    provide: {
      elForm: {},
      elFormItem: {}
    }
  }
}

describe('Button.vue', () => {
  test('render text', () => {
    const instance = mount(Button, {
      slots: {
        default: AXIOM
      },
      ...COMMON_CONFIG
    })
    expect(instance.text()).toEqual(AXIOM)
  })

  test('handle click', async () => {
    const instance = mount(Button, {
      slots: {
        default: AXIOM
      },
      ...COMMON_CONFIG
    })

    await instance.trigger('click')
    expect(instance.emitted()).toBeDefined()
  })
})
