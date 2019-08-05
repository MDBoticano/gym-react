import React from 'react'

const Search = ({ filterTerm, filterHandler }) => {
  return (
    <div id="Search">
      <input value={filterTerm} onChange={filterHandler} />
    </div>
  )
}

export default Search