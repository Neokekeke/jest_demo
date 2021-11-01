import { shallowMount } from '@vue/test-utils'
import Button from '@/components/Button'

describe('Button组件', () => {
  test('TDD --> 测试 Button 组件是否存在', () => {
    const wrapper = shallowMount(Button)
    expect(wrapper.exists()).toBeTruthy()
  })

  test('TDD --> 测试 Button 组件点击触发emit', () => {
    const wrapper = shallowMount(Button)
    wrapper.trigger('click')
    wrapper.trigger('click')
    const emit = wrapper.emitted()
    expect(emit['button-click']).toBeTruthy()
    expect(emit['button-click'][0]).toEqual(['666'])
    expect(emit['button-click'].length).toBe(2)
  })
})
