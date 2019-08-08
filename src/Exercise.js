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
      <div className="edit-and-delete-btns">
        <button className="edit-exercise-btn">edit</button>
        <div className="btn-divider">|</div>
        <button className="delete-exercise-btn">delete</button>
      </div>
      <ul>
        {displayCategories(category)}
      </ul>
    </div>
  )
}

export default Exercise