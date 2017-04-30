import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Results from './Results'

describe('<Results />', () => {
  const props = {
    artists: []
  }
  let wrapper
  beforeEach( () => {
    wrapper = shallow(<Results {...props}/>)
  })

  it ('should exist', () => {
    expect(wrapper).to.exist
  })

  it('should render a <div />', () => {
    expect(wrapper.type()).to.equal('div')
  })
})