import React from 'react'
import './Exercise.css'

const Exercise = ({ name, id, category, chipSetsFilter, updateExercise,
   deleteExercise }) => {

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
    <div className="Exercise" id={id}>
      <p>{name}</p>
      <div className="edit-and-delete-btns">
        <button className="edit-exercise" onClick={() => updateExercise(id)}>
          edit
        </button>
        <div className="btn-divider">|</div>
        <button className="delete-exercise" onClick={() => deleteExercise(id)}>
          delete
        </button>
      </div>
      <ul>
        {displayCategories(category)}
      </ul>
    </div>
  )
}

export default Exercise