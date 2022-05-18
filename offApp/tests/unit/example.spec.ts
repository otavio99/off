import { mount } from '@vue/test-utils'
import TabPageForAdd from '@/views/TabPageForAdd.vue'

describe('TabPageForAdd.vue', () => {
  it('renders tab 1 TabPageForAdd', () => {
    const wrapper = mount(TabPageForAdd)
    expect(wrapper.text()).toMatch('Tab 1 page')
  })
})
