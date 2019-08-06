import React from 'react'

const AddExercise = ({ submitExercise, nameHandler, formName, categoriesHandler,
  formCategories }) => {

  return (
    <div id="AddExercise">
      <form id="newExerciseForm" onSubmit={submitExercise}>
        <input type="text" onChange={nameHandler} value={formName}/>
        <input type="text" onChange={categoriesHandler} value={formCategories}/>
        <input type="submit" value="Add Exercise"/>
      </form>
    </div>
  )
}

export default AddExercise