import React from 'react'

const SearchInput = props => {
  const { handleInputChange } = props
  return (
    <div className="search-input">
      <input
        className="search-input__field"
        type="text"
        onChange={handleInputChange}
      />
    </div>
  )
}

export default SearchInput
