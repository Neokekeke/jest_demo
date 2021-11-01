import { mount } from '@vue/test-utils'
import Main from '../../../src/container/main'

describe('Main组件 --> 模拟用户行为进行集成测试', () => {
  test(`
    1、点击按钮后，标题文案会被修改
    2、标题文案被改成666
    3、2秒手标题文案变成abc
  `, (done) => {
    const wrapper = mount(Main)
    expect(wrapper.exists()).toBeTruthy()
    const header = wrapper.find('.header')
    const button = wrapper.find('.button')
    expect(header.text()).toEqual('这是一个标题')
    button.trigger('click')
    expect(header.text()).toEqual('666')
    setTimeout(() => {
      expect(header.text()).toEqual('abc')
      done()
    }, 2000)
  })
})
