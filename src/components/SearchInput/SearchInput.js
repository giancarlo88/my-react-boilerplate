import React from 'react'

import './SearchInput.css'

const SearchInput = props => {
  const { handleInputChange, query } = props
  return (
    <div className="search-input">
      <input
        className="search-input__field"
        type="text"
        onChange={handleInputChange}
        value={query}
      />
    </div>
  )
}

export default SearchInput
