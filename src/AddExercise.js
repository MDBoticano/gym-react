import React, { useState } from 'react'
import './AddExercise.css'

const AddExercise = ({ submitExercise, nameHandler, formName, 
  categoriesHandler, resetFormName }) => {

  const formVisibleText = 'X'
  const formInvisibleText = '+'
  
  const [formIsVisible, setFormIsVisible] = useState(false)
  const [formToggleText, setFormToggleText] = useState(formInvisibleText)
  const [addList, setAddList] = useState([])

  const formCategoriesList = ["biceps", "triceps", "chest", "back", "shoulders",
   "abs", "cardio"].sort()

  const toggleForm = () => {
    if (!formIsVisible) {
      document.getElementById('AddExercise').classList.remove('formIsClosed')
      document.getElementById('AddExercise').classList.add('formIsOpen')
      document.getElementById('newExerciseForm').classList.remove('hidden')
      document.getElementById('addExerciseToggle').classList.remove('openForm')
      document.getElementById('addExerciseToggle').classList.add('closeForm')
      document.getElementById('form-underlay').classList.remove('hidden')
      setFormIsVisible(true)
      setFormToggleText(formVisibleText)
    } else if (formIsVisible) {
      document.getElementById('AddExercise').classList.remove('formIsOpen')
      document.getElementById('AddExercise').classList.add('formIsClosed')
      document.getElementById('newExerciseForm').classList.add('hidden')
      document.getElementById('addExerciseToggle').classList.remove('closeForm')
      document.getElementById('addExerciseToggle').classList.add('openForm')
      document.getElementById('form-underlay').classList.add('hidden')
      setFormIsVisible(false)
      setFormToggleText(formInvisibleText)
      resetForm()
    }
  }

  const mapCategoriesToList = (list) => {
    return list.map( (name, index) => {
      const liID = 'category-select-' + name
      return (
      <li key={index} id={liID}
        className="category-chip" 
        onClick={()=>chipSelect(name, liID)}>
        {name}
      </li>)
    })
  }

  const chipSelect = (category, liID) => {
    /* add/remove to list */
    modifyAddList(category)
    console.log(addList)

    /* change css */
    document.getElementById(liID).classList.toggle('chip-added')
  }

  const modifyAddList = (category) => {
    /* add if in list, remove if not in list */
    if (!addList.includes(category)) {
      setAddList(addList.concat(category))
    } else {
      setAddList(addList.filter(listItem => listItem !== category))
    }   
  }

  const setCategoriesValue = () => {
    let inputValue = addList.join()
    categoriesHandler(inputValue)
    return inputValue
  }

  const formSubmit = (event) => {
    event.preventDefault()
    toggleForm()

    /* Do actual form submission */
    submitExercise(event)
  }

  const resetForm = () => {
    /* reset AddList */
    setAddList([])

    /* remove all instances of chip-added */
    const chipAddedElems = document.getElementsByClassName('chip-added')
    while (chipAddedElems.length > 0) {
      chipAddedElems[0].classList.remove('chip-added')
    }

    /* reset form name field by modifying state in App */
    resetFormName()
  }

  return (
    <div id="AddExercise" className="formIsClosed">
      <button id="addExerciseToggle" className="openForm" onClick={toggleForm}>
        {formToggleText}
      </button>
      <form id="newExerciseForm" className="hidden" onSubmit={formSubmit}>
        <p id="form-Title">Create new exercise:</p>
        <div id="formName" className="formField">
          <label htmlFor="name">name</label>
          <input id="formNameInput"
            type="text" name="exercise_name" 
            onChange={nameHandler} value={formName}
          />
        </div>
        <div id="formCategories" className="formField"> 
          <label htmlFor="categories">categories</label>
          <input id="formCategoriesInput" readOnly
            type="hidden" name="categories"
            value={setCategoriesValue()}
          />
          <ul id="formCategoriesList">
            {mapCategoriesToList(formCategoriesList)}
          </ul>
        </div>
        <input id="newExerciseSubmit" type="submit" value="Submit"/>
      </form>
    </div>
  )
}

export default AddExercise