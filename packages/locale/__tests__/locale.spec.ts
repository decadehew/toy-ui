import { mount } from '@vue/test-utils'
import { t, use } from '../index'
import localeMixin from '../mixin'
import zhTW from '../lang/zh-TW'

describe('Locale', () => {
  test('t', () => {
    expect(t('el.popconfirm.confirmButtonText')).toBe('Yes')
  })

  test('return key name if not defined', () => {
    expect(t('el.popconfirm.someThing')).toBe('someThing')
  })

  test('use', () => {
    use(zhTW)
    expect(t('el.popconfirm.confirmButtonText')).toBe('确定')
  })

  test('mixin', () => {
    const component = {
      template: `<p>{{ t('el.popconfirm.cancelButtonText') }}</p>`,
      mixins: [localeMixin],
    } as any
    const wrapper = mount(component)
    expect(wrapper.text()).toContain('No')
  })
})
