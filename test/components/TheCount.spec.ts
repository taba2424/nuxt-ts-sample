import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import TheCount from '~/components/TheCount.vue'

const localVue = createLocalVue()
localVue.use(Vuetify)

describe('pages/count', () => {
  let wrapper: any
  beforeEach(() => {
    wrapper = shallowMount(TheCount, { localVue })
  })

  describe('template', () => {
    test('button が存在すること', () => {
      expect(wrapper.find('button')).toBeTruthy()
    })
  })

  describe('script', () => {
    describe('props', () => {
      describe('count', () => {
        test('count の初期値', () => {
          expect(wrapper.props().count).toBe(0)
        })

        test('count に代入', () => {
          wrapper.setProps({ count: 10 })
          expect(wrapper.props().count).toBe(10)
        })
      })
    })

    describe('methods', () => {
      describe('handleClick', () => {
        test('emitが正常に実行されること', async () => {
          await wrapper.vm.handleClick()
          expect(wrapper.emitted().click).toBeTruthy()
        })
      })
    })
  })
})
