import React from 'react'

const EditExercise = ({ 
    formName, nameHandler, 
    formCategories, categoriesHandler,
    resetFormName, resetFormCategories,
    submitEdit 
  }) => {
  // console.log('render EditExercise')
  
  // console.log('name', formName)
  // console.log('first category', formCategories[0])
  // console.log('all categories', formCategories)
  // console.log('local categories', localCategories)

  return (
    // <div id="EditExercise" className="hidden">
    <div id="EditExercise">
      <p>{formName}</p>
      <p>{formCategories}</p>
    </div>
  )
}

export default EditExercise