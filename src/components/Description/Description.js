import React from 'react'
import PropTypes from 'prop-types'

import './Description.css'

const Description = props => {
  const { text } = props
  return <div className="product__description">{text}</div>
}

Description.propTypes = {
  text: PropTypes.string.isRequired
}

export default Description
