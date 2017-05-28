import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import App from './App'
import ProductSearch from '../ProductSearch/ProductSearch'

describe('<AppComponent />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should exist', () => {
    expect(wrapper).to.exist
  })

  it('should render a <ProductSearch /> component', () => {
    expect(wrapper.type()).to.equal(ProductSearch)
  })
})
