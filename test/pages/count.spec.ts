import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Count from '~/pages/count.vue'

const localVue = createLocalVue()
localVue.use(Vuetify)

describe('pages/count', () => {
  let wrapper: any
  beforeEach(() => {
    wrapper = shallowMount(Count, { localVue })
  })

  describe('script', () => {
    describe('data', () => {
      test('count', () => {
        expect(wrapper.vm.count).toBe(0)
      })
    })

    describe('method', () => {
      describe('increment', () => {
        let beforeCount: number
        beforeEach(() => {
          beforeCount = wrapper.vm.count
        })

        test('count + 1', () => {
          wrapper.vm.increment()
          expect(wrapper.vm.count).toBe(beforeCount + 1)
        })
      })
    })
  })
})
