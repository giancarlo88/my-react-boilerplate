import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import Product from './Product'
import Description from '../Description/Description'

describe('<Product /> (shallow rendering)', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Product />)
  })

  it('should exist', () => {
    expect(wrapper).to.exist
  })

  it('should render a <div />', () => {
    expect(wrapper.type()).to.equal('div')
  })

  it('should contain title passed from the title prop', () => {
    const title = 'Pinot Grigio'
    wrapper.setProps({ title })
    expect(wrapper.text()).to.equal(title)
  })

  it('should render a <span /> with className "product__title--open" if the isOpen state is true', () => {
    const isOpen = true
    wrapper.setState({ isOpen })
    expect(wrapper.find('.product__title--open')).to.have.length(1)
  })

  it('should render a <Description /> component if the isOpen state is true', () => {
    const isOpen = true
    wrapper.setState({ isOpen })
    expect(wrapper.find(Description)).to.have.length(1)
  })

  it('should change the isOpen state when the title of the product is clicked', () => {
    wrapper.find('.product__title').simulate('click')
    expect(wrapper.state('isOpen')).to.be.true
    wrapper.find('.product__title').simulate('click')
    expect(wrapper.state('isOpen')).to.be.false
  })
})

describe('<Product /> (deep rendering)', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(<Product />)
  })

  it('should render a <Description /> with text passed from the description prop if the isOpen state is true', () => {
    const description = 'Sample item description'
    const isOpen = true
    wrapper.setProps({ description })
    wrapper.setState({ isOpen })
    expect(wrapper.find(Description).text()).to.equal(description)
  })
})
