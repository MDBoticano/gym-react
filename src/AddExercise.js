import React, { useState } from 'react'
import './AddExercise.css'

const AddExercise = ({ submitExercise, nameHandler, formName, 
  categoriesHandler, formCategories }) => {

  const formVisibleText = 'X'
  const formInvisibleText = '+'
  
  const [formIsVisible, setFormIsVisible] = useState(false)
  const [formToggleText, setFormToggleText] = useState(formInvisibleText)

  const toggleForm = () => {
    if (!formIsVisible) {
      document.getElementById('AddExercise').classList.remove('formIsClosed')
      document.getElementById('AddExercise').classList.add('formIsOpen')
      document.getElementById('newExerciseForm').classList.remove('hidden')
      document.getElementById('addExerciseToggle').classList.remove('openForm')
      document.getElementById('addExerciseToggle').classList.add('closeForm')
      setFormIsVisible(true)
      setFormToggleText(formVisibleText)
    } else if (formIsVisible) {
      document.getElementById('AddExercise').classList.remove('formIsOpen')
      document.getElementById('AddExercise').classList.add('formIsClosed')
      document.getElementById('newExerciseForm').classList.add('hidden')
      document.getElementById('addExerciseToggle').classList.remove('closeForm')
      document.getElementById('addExerciseToggle').classList.add('openForm')
      setFormIsVisible(false)
      setFormToggleText(formInvisibleText)
    }
  }

  return (
    <div id="AddExercise" className="formIsClosed">
      <button id="addExerciseToggle" className="openForm" onClick={toggleForm}>
        {formToggleText}
      </button>
      <form id="newExerciseForm" className="hidden" onSubmit={submitExercise}>
        <div id="formName" className="formField">
          <label htmlFor="name">name</label>
          <input id="formNameInput"
            type="text" name="exercise_name" 
            onChange={nameHandler} value={formName}
          />
        </div>
        <div id="formCategories" className="formField"> 
          <label htmlFor="categories">categories (separate by space) </label>
          <input id="formCategoriesInput"
            type="text" name="categories" 
            onChange={categoriesHandler} value={formCategories}
          />
        </div>
        <input id="newExerciseSubmit" type="submit" value="Submit"/>
      </form>
    </div>
  )
}

export default AddExercise