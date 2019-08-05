import React from 'react'
import './Exercise.css'

const Exercise = ({ name, category, chipSetsFilter }) => {

  const displayCategories = (categoryObj) => {
    return categoryObj.map( (category) => {
      return (
        <li key={category} className="category-chip" 
          onClick={() => chipSetsFilter(category)}
        > 
          {category} 
        </li>
        )
    })
  }


  return (
    <div className="Exercise">
      <p>{name}</p>
      <ul>
        {displayCategories(category)}
      </ul>
    </div>
  )
}

export default Exercise