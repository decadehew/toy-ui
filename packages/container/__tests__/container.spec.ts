import { mount } from '@vue/test-utils'
import Container from '../src/container.vue'
import Header from '../src/header.vue'
import Main from '../src/main.vue'
import Aside from '../src/aside.vue'
import Footer from '../src/footer.vue'

const AXIOM = 'I am a boy'

describe('Container.vue', () => {
  test('container render test', () => {
    const wrapper = mount(Container, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })

  test('vertical', () => {
    const TestComponent = {
      template: `
        <el-container>
          <el-header></el-header>
          <el-main></el-main>
        </el-container>`,
      components: {
        'el-container': Container,
        'el-header': Header,
        'el-main': Main,
      },
    }

    const wrapper = mount(TestComponent)
    expect(wrapper.vm.$el.classList.contains('is-vertical')).toBe(true)
  })

  test('direction', () => {
    const TestComponent = {
      template: `
        <el-container :direction="direction">
          <el-header></el-header>
          <el-main></el-main>
        </el-container>`,
      components: {
        'el-container': Container,
        'el-header': Header,
        'el-main': Main,
      },
      data() {
        return {
          direction: 'horizontal',
        }
      },
    }
    const wrapper = mount(TestComponent)
    expect(wrapper.vm.$el.classList.contains('is-vertical')).toBe(false)
    wrapper.vm.direction = 'vertical'
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.$el.classList.contains('is-vertical')).toBe(true)
    })
  })
})

describe('Header', () => {
  test('create header', () => {
    const wrapper = mount(Header)
    expect(wrapper.classes()).toContain('el-header')
  })

  test('header height', () => {
    const wrapper = mount(Header, {
      props: {
        height: '100px',
      },
    })
    const vm = wrapper.vm
    expect(vm.$el.style.height).toEqual('100px')
  })
})

describe('Main', () => {
  test('create main', () => {
    const wrapper = mount(Main)
    expect(wrapper.classes()).toContain('el-main')
  })
})

describe('Aside', () => {
  test('create aside', () => {
    const wrapper = mount(Aside)
    expect(wrapper.classes()).toContain('el-aside')
  })

  test('aside width', () => {
    const wrapper = mount(Aside, {
      props: {
        width: '200px',
      },
    })
    const vm = wrapper.vm
    expect(vm.$el.style.width).toEqual('200px')
  })
})

describe('Footer', () => {
  test('create footer', () => {
    const wrapper = mount(Footer)
    expect(wrapper.classes()).toContain('el-footer')
  })

  test('footer height', () => {
    const wrapper = mount(Footer, {
      props: {
        height: '100px',
      },
    })
    const vm = wrapper.vm
    expect(vm.$el.style.height).toEqual('100px')
  })
})
