import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import ProductList from './ProductList'
import Product from '../../components/Product/Product'

describe('<ProductList />', () => {
  let wrapper
  const props = {
    products: [
      {
        title: 'chocolate',
        description: 'lorem ipsum',
        categories: [{ title: 'chocolate' }]
      },
      {
        title: 'red wine',
        description: 'lorem ipsum',
        categories: [{ title: 'wine' }]
      },
      {
        title: 'prosecco',
        description: 'lorem ipsum',
        categories: [{ title: 'wine' }]
      }
    ]
  }

  beforeEach(() => {
    wrapper = shallow(<ProductList {...props} />)
  })

  it('should exist', () => {
    expect(wrapper).to.exist
  })

  it('should render a <div />', () => {
    expect(wrapper.type()).to.equal('div')
  })

  it('should only render products that match the query', () => {
    const query = 'choco'
    wrapper.setProps({ query })
    expect(wrapper.find(Product)).to.have.length(1)
  })

  it('should only render products that match the selected filter', () => {
    const selectedFilter = 'wine'
    wrapper.setProps({ selectedFilter })
    expect(wrapper.find(Product)).to.have.length(2)
  })
})
