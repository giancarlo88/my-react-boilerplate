import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Filter from './Filter'

describe('<Filter />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Filter />)
  })

  it('should exist', () => {
    expect(wrapper).to.exist
  })

  it('should render a <div />', () => {
    expect(wrapper.type()).to.equal('div')
  })

  it('should contain text passed from the title prop', () => {
    const title = 'wine'
    wrapper.setProps({ title })
    expect(wrapper.text()).to.equal(title)
  })

  it('should have the className "filter--selected" if the isSelected prop is true', () => {
    const isSelected = true
    wrapper.setProps({ isSelected })
    expect(wrapper.hasClass('filter--selected')).to.be.true
  })
})
