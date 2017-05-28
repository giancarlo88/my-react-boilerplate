import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import SearchInput from './SearchInput'

describe('<SearchInput />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<SearchInput />)
  })

  it('should exist', () => {
    expect(wrapper).to.exist
  })

  it('should render a <div />', () => {
    expect(wrapper.type()).to.equal('div')
  })

  it('should fire the handleInputChange prop when its value is changed', () => {
    const handleInputChange = sinon.spy()
    wrapper.setProps({ handleInputChange })
    wrapper
      .find('input')
      .simulate('change', { target: { value: 'test input' } })
    expect(handleInputChange.callCount).to.equal(1)
  })
})
