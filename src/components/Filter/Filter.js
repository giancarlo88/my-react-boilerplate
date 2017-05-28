import React from 'react'
import PropTypes from 'prop-types'
import './Filter.css'

const Filter = props => {
  const { handleClick, isSelected, title } = props
  const className = isSelected ? 'filter filter--selected' : 'filter'
  return (
    <div onClick={handleClick} className={className}>
      {title}
    </div>
  )
}

Filter.propTypes = {
  handleClick: PropTypes.func,
  isSelected: PropTypes.bool,
  name: PropTypes.string
}

Filter.defaultProps = {
  isSelected: false,
  name: ''
}

export default Filter
