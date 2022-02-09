import { mount } from '@cypress/vue'
import Sample from './Sample.vue'

describe('test component', () => {
  it('it should mount component', () => {
    mount(Sample, {
      props: {
        msg: 'Salam'
      }
    })
    cy.contains('Salam')
  })
  it('it should not mount component', () => {
    mount(Sample)
  })
})
