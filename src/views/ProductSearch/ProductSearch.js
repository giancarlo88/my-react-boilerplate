import React, { Component } from 'react'
import ProductFilters from '../../containers/ProductFilters/ProductFilters'
import SearchInput from '../../components/SearchInput/SearchInput'
import ProductList from '../../containers/ProductList/ProductList'

import { getFilters, getProducts } from '../../services/requests'

class ProductSearch extends Component {
  constructor() {
    super()
    this.state = {
      filters: [],
      products: [],
      query: '',
      selectedFilter: ''
    }

    this.handleFilterClick = this.handleFilterClick.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  componentWillMount() {
    Promise.all([getFilters, getProducts])
      .then(values => {
        return this.setState({
          filters: values[0].data.data,
          products: values[1].data.data
        })
      })
      .catch(error => {
        window.alert(error)
      })
  }

  handleFilterClick(value) {
    this.setState(oldState => {
      // "Turn off" the filter if the selected filter is clicked again.
      if (oldState.selectedFilter === value) {
        return { selectedFilter: '' }
      } else {
        return { selectedFilter: value }
      }
    })
  }

  handleInputChange(e) {
    this.setState({
      query: e.target.value
    })
  }

  render() {
    const { filters, products, query, selectedFilter } = this.state
    return (
      <div className="product-search">
        <ProductFilters
          filters={filters}
          handleFilterClick={this.handleFilterClick}
          selectedFilter={selectedFilter}
        />
        <SearchInput handleInputChange={this.handleInputChange} />
        <ProductList
          products={products}
          query={query.toLowerCase()}
          selectedFilter={selectedFilter}
        />
      </div>
    )
  }
}

export default ProductSearch
