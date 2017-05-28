import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import ProductSearch from './ProductSearch'
import Filter from '../../components/Filter/Filter'

describe('<ProductSearch /> (shallow rendering)', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<ProductSearch />)
  })

  it('should exist', () => {
    expect(wrapper).to.exist
  })

  it('should render a <div /> ', () => {
    expect(wrapper.type()).to.equal('div')
  })
})

describe('<ProductSearch /> (deep rendering)', () => {
  let wrapper
  const state = {
    filters: [
      {
        title: 'wine'
      },
      {
        title: 'chocolate'
      }
    ]
  }
  beforeEach(() => {
    wrapper = mount(<ProductSearch />)
    wrapper.setState(state)
  })

  it('should set the query state when the input field is changed', () => {
    const query = 'chocolate'
    wrapper
      .find('.search-input__field')
      .simulate('change', { target: { value: query } })
    expect(wrapper.state('query')).to.equal(query)
  })

  it('should set the selectedFilter state when a specific filter is clicked', () => {
    const selectedFilter = 'wine'
    wrapper.find(Filter).first().simulate('click')
    expect(wrapper.state('selectedFilter')).to.equal(selectedFilter)
  })

  it('should set the selectedFilter state to an empty string if the same filter is clicked again', () => {
    const selectedFilter = 'wine'
    wrapper.setState({ selectedFilter })
    wrapper.find(Filter).first().simulate('click')
    expect(wrapper.state('selectedFilter')).to.equal('')
  })
})
