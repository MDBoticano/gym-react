import React from 'react'
import './EditExercise.css'

const EditExercise = ({ 
    formName, nameHandler, 
    formCategories, categoriesHandler,
    resetFormName, resetFormCategories,
    editVisible, hideEdit,
    submitEdit 
  }) => {

  const allCategoriesList = ["biceps", "triceps", "chest", "back", "shoulders",
   "abs", "legs", "cardio"].sort()


  /* convert categories array into chips */
  const mapCategoriesToList = (list) => {
    return list.map( (name, index) => {
      const liID = 'category-select-' + name
      let liClasses = "category-chip"

      /* if formCategories includes it, active it*/
      if (formCategories.includes(name)) {
        liClasses = liClasses.concat(" chip-in-array")
      }

      return (
        <li key={index} id={liID}
          className={liClasses}
          onClick={()=>toggleChip(name, liID)}
        >
          {name}
        </li>)
    })
  }

  /* make chips toggle-able: (1) Style, (2) in formCategories */
  const toggleChip = (name, ID) => {
    /* modify formCategories */

    // if in formCategories, remove it,
    if (formCategories.includes(name)) {
      categoriesHandler(formCategories.filter(
        category => category !== name
      ))
    } else {
      categoriesHandler(formCategories.concat(name))
    }


    // if not in formCategories, add it


    /* Style */
    console.log('clicked chip', ID)
    /* style it */
    document.getElementById(ID).classList.remove('chip-in-array')
  
  }

  return (
    <div id="EditExercise" className={editVisible}>
      <button id="closeEdit" onClick={()=> hideEdit()}>X</button>
      {/* <p>{formName}</p>
      <p>{formCategories}</p> */}
      <form id="editExerciseForm" onSubmit={submitEdit}>
        <p id="edit-form-title">Edit exercise:</p>
        
        <div id="editName" className="formField">
          <label htmlFor="editName">name</label>
          <input id="editNameInput" 
            type="text" name="edit-name"
            onChange={nameHandler} value={formName}
          />
        </div>
        
        <div id="editCategories" className="formField">
          <label htmlFor="editCategories">categories</label>
          <ul id="editCategoriesList">
            {mapCategoriesToList(allCategoriesList)}
          </ul>
        </div>

        <input id="editExerciseSubmit" type="submit" value="Confirm Edit" />
      </form>
    </div>
  )
}

export default EditExercise