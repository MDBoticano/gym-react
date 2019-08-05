import React from 'react'
import './Filter.css'

const Filter = ({ filterTypes, filtersSelector, filterTerm, filterHandler }) => {
  const createLabels = (typesToLabel) => {
    return Object.keys(typesToLabel).map((type) =>  { return (
      <label key={[type]}>
        {[type]}
        <input 
          type="checkbox"
          checked={filterTypes[type]}
          onChange={()=> filtersSelector([type])}
        />          
      </label>
    )})
  }

  return (
    <div id="Filter">
      <div id="search">
        <h1>Search</h1>
        <input id="searchBar" value={filterTerm} onChange={filterHandler} />
      </div>

      <div id="filterTypes">
        {createLabels(filterTypes)}
      </div>

    </div>
  )
}

export default Filter