import React from 'react'
import PropTypes from 'prop-types'

import Product from '../../components/Product/Product'

import { generateCategoryTitles } from '../../utils/utils'

const ProductList = props => {
  const { products, query, selectedFilter } = props
  return (
    <div className="product-list">
      {products.map((item, index) => {
        const { categories, description, title } = item
        const categoryTitles = generateCategoryTitles(categories)
        return (
          //  Render products based on selected filter or query. If either are falsy, ignore them.
          (!selectedFilter ||
            (selectedFilter && categoryTitles.indexOf(selectedFilter) >= 0)) &&
          (!query || title.toLowerCase().indexOf(query) >= 0) &&
          <Product key={index} title={title} description={description} />
        )
      })}
    </div>
  )
}

ProductList.propTypes = {
  products: PropTypes.array,
  query: PropTypes.string,
  selectedFilter: PropTypes.string
}

ProductList.defaultProps = {
  products: [],
  query: '',
  selectedFilter: ''
}

export default ProductList
