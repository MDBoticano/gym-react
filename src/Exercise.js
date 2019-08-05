import React from 'react'

const Exercise = ({ name, category }) => {

  const displayCategories = (categoryObj) => {
    return categoryObj.map( (category) => {
      return <li key={category}>{category}</li>
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