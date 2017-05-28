import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import ProductFilters from './ProductFilters'

describe('<ProductFilters/>', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<ProductFilters />)
  })

  it('should exist', () => {
    expect(wrapper).to.exist
  })

  it('should render a <div />', () => {
    expect(wrapper.type()).to.equal('div')
  })
})
