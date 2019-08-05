import React from 'react'

const Exercise = ({ name, category }) => {
  return (
    <div className="Exercise">
      <p>{name}</p>
      <ul>
        <li>{category}</li>
      </ul>
    </div>
  )
}

export default Exercise