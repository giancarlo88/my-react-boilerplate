import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Description from '../Description/Description'

import './Product.css'

// Because multiple products can be showing their descriptions at once, it is simpler to give each product its own local state.
class Product extends Component {
  constructor() {
    super()
    this.state = {
      isOpen: false
    }

    this.handleProductClick = this.handleProductClick.bind(this)
  }

  handleProductClick() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    const { title, description } = this.props
    const { isOpen } = this.state
    const className = isOpen
      ? 'product__title product__title--open'
      : 'product__title'
    return (
      <div className="product">
        <span className={className} onClick={this.handleProductClick}>
          {title}
        </span>
        {isOpen && <Description text={description} />}
      </div>
    )
  }
}

Product.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}

export default Product
