import React from 'react'
import PropTypes from 'prop-types'

import Filter from '../../components/Filter/Filter'
import './ProductFilters.css'

const ProductFilters = props => {
  const { filters, handleFilterClick, selectedFilter } = props
  return (
    <div className="product-filters">
      {filters.map((item, index) => {
        const { title } = item
        const isSelected = title === selectedFilter
        return (
          <Filter
            key={index}
            index={index}
            title={title}
            isSelected={isSelected}
            handleClick={() => handleFilterClick(title)}
          />
        )
      })}
    </div>
  )
}

ProductFilters.propTypes = {
  filters: PropTypes.array,
  handleFilterClick: PropTypes.func,
  selectedFilter: PropTypes.string
}

ProductFilters.defaultProps = {
  filters: [],
  selectedFilter: ''
}

export default ProductFilters
