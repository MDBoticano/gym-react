import React from 'react'

const Filter = ({ filterTypes, filtersSelector, filterTerm, filterHandler }) => {
  return (
    <div id="Filter">
      <div id="searchBar">
        <input value={filterTerm} onChange={filterHandler} />
      </div>

      <div id="filterTypes">
        <label value="">
          Name
          <input 
            name="name"
            type="checkbox"
            checked={filterTypes.name}
            onChange={() => filtersSelector('name')}
          />
        </label>
        <label value="">
          Category
          <input 
            name="category"
            type="checkbox"
            checked={filterTypes.category}
            onChange={() => filtersSelector('category')}
          />
        </label>        
      </div>

    </div>
  )
}

export default Filter