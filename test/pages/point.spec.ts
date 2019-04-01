import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Point from '~/pages/point.vue'

const localVue = createLocalVue()
localVue.use(Vuetify)

describe('pages/point', () => {
  let wrapper: any
  beforeEach(() => {
    wrapper = shallowMount(Point, { localVue })
  })

  describe('script', () => {
    describe('data', () => {
      test('width', () => {
        expect(wrapper.vm.width).toBe(800)
      })

      test('height', () => {
        expect(wrapper.vm.height).toBe(600)
      })
    })

    describe('computed', () => {
      describe('halfWidth', () => {
        test('width / 2', () => {
          expect(wrapper.vm.halfWidth).toBe(400)
        })
      })

      describe('halfHeight', () => {
        test('height / 2', () => {
          expect(wrapper.vm.halfHeight).toBe(300)
        })
      })

      describe('halfPoint', () => {
        test('x: width / 2', () => {
          expect(wrapper.vm.halfPoint.x).toBe(400)
        })

        test('y: height / 2', () => {
          expect(wrapper.vm.halfPoint.y).toBe(300)
        })
      })
    })
  })
})
