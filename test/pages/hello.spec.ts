import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Hello from '~/pages/hello.vue'

const localVue = createLocalVue()
localVue.use(Vuetify)

describe('pages/hello', () => {
  let wrapper: any
  let content: any
  beforeEach(() => {
    wrapper = shallowMount(Hello, { localVue })
    content = (id: string) => `[test-data="${id}"]`
  })

  describe('template', () => {
    test('メッセージ入力フォームが存在すること', () => {
      expect(wrapper.find(content('input-message'))).toBeTruthy()
    })
  })

  describe('script', () => {
    describe('data', () => {
      test('message', () => {
        expect(wrapper.vm.message).toBe('World')
      })
    })
  })
})