import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Description from './Description'

describe('<Description />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Description />)
  })

  it('should exist', () => {
    expect(wrapper).to.exist
  })

  it('should render a <div />', () => {
    expect(wrapper.type()).to.equal('div')
  })

  it('should contain text passed from the title prop', () => {
    const text = 'Sample product text.'
    wrapper.setProps({ text })
    expect(wrapper.text()).to.equal(text)
  })
})
