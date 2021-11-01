import { shallowMount } from '@vue/test-utils'
import Header from '@/components/header'

describe('Header组件', () => {
  test('测试 Header 组件是否存在', () => {
    const wrapper = shallowMount(Header)
    expect(wrapper.exists()).toBeTruthy()
  })

  test('测试 Header 组件的标题是否可以修改', () => {
    const wrapper = shallowMount(Header)
    expect(wrapper.find('.title').text()).toEqual('这是一个标题')
    wrapper.setProps({ title: '修改后的标题' })
    expect(wrapper.find('.title').text()).toEqual('修改后的标题')
  })
})
