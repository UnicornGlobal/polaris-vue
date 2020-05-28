import { shallowMount, createLocalVue } from '@vue/test-utils'
import DynamicTag from '../../src/components/DynamicTag.vue'

describe('DynamicTag.vue', () => {
  it('Has the correct properties', () => {
    expect(DynamicTag.props).to.be.an('object').that.has.all.keys([
      'tag',
      'on',
      'value'
    ])
  })
})
