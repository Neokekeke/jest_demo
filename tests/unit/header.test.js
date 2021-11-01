import { shallowMount } from '@vue/test-utils'
import Header from '@/components/header'

describe('Header组件', () => {
  test('TDD --> 测试 Header 组件是否存在', () => {
    const wrapper = shallowMount(Header)
    expect(wrapper.exists()).toBeTruthy()
  })

  test('TDD --> 测试 Header 组件的标题是否可以修改', () => {
    const defaultTitle = '这是一个标题'
    const newTitle = '修改后的标题'
    const wrapper = shallowMount(Header)
    expect(wrapper.find('.title').text()).toEqual(defaultTitle)
    wrapper.setProps({ title: newTitle })
    expect(wrapper.find('.title').text()).toEqual(newTitle)
  })
})
