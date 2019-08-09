import React, { useState, useEffect } from 'react'
import './App.css'
import Filter from './Filter'
import Exercises from './Exercises'
import AddExercise from './AddExercise'
import EditExercise from './EditExercise'
import exerciseService from './services/exerciseService'

const App = () => {
  const defaultFilterTypes = {
    "name": true,
    "category": true
  }
  const [filterTerm, setFilterTerm] = useState('')
  const [filterTypes, setFilterTypes] = useState(defaultFilterTypes)
  const [exerciseList, setExerciseList] = useState([])

  /* From form */
  const [formName, setFormName] = useState('')
  const [formCategories, setFormCategories] = useState('')

  /* For Edit */
  const [editName, setEditName] = useState('')
  const [editCategories, setEditCategories] = useState([])
  const [formID, setFormID] = useState(-1)
  const [editVisible, setEditVisible] = useState('hidden')

  /* GET: Retreive list of exercises from server */
  useEffect(() => {
    exerciseService
      .getExercises()
      .then((retreievedExercises) => {
        setExerciseList(retreievedExercises)
      })
  }, [])

  const filterList = (event) => {
    setFilterTerm(event.target.value)
  }

  const filtersSelector = (type) => {
    setFilterTypes({ ...filterTypes, [type]: !filterTypes[type] })
  }

  const chipSetsFilter = (chipName) => {
    /* Set sort by categories to be true */
    setFilterTypes({ ...filterTypes, "category": true })
    setFilterTerm(chipName)
  }

  const makeId = () => {
    return exerciseList.length + 1
  }

  const submitExercise = (event) => {
    event.preventDefault()
    console.log('Name:', formName)
    console.log('Categories:', formCategories)

    const splitCategories = formCategories.split(',')
    console.log(splitCategories)

    const exerciseEntry = {
      name: formName,
      id: makeId(),
      category: splitCategories,
      date: new Date().toISOString()
    }

    if (window.confirm(`Do you want to add ${formName}?`)) {
      exerciseService
        .createExercise(exerciseEntry)
        .then(returnedEntry => {
          setExerciseList(exerciseList.concat(returnedEntry))
        })
        .then(console.log('Successfully added entry'))
        .catch(error => console.log(error.response.data))
    }

    /* clear */
    resetFormName()
  }

  const nameHandler = (event) => {
    setFormName(event.target.value)
  }

  const categoriesHandler = (categories) => {
    setFormCategories(categories)
  }

  const resetFormName = () => {
    setFormName('')
  }

  const resetFormCategories = () => {
    setFormCategories([])
  }

  const resetFormID = () => {
    setFormID(-1)
  }

  const editNameHandler = (event) => {
    setEditName(event.target.value)
  }

  const editCategoriesHandler = (categories) => {
    setEditCategories(categories)
  }

  const deleteExercise = (id) => {
    /* get name at id */
    // look at state exerciseList
    let objectOfId = exerciseList.find(exercise => exercise.id === id)
    console.log(objectOfId)
    console.log(objectOfId.name)

    if(window.confirm(`Do you want to delete ${objectOfId.name}?`)) {
      exerciseService
      .deleteExercise(id)
      .then(returnedEntries => {
        setExerciseList(returnedEntries)
      })
    }
  }

  /* ID is set by edit button */
  /* Used by EditExercise component */
  const submitEdit = (event) => {
    event.preventDefault()
    console.log('ID:', formID)
    console.log('Name:', editName)
    console.log('Categories:', editCategories)

    // const splitCategories = editCategories.split(',')
    // console.log(splitCategories)

    const exerciseEntry = {
      id: formID,
      name: editName,
      category: editCategories,
    }

    if (window.confirm(`Do you want to edit ${formName}?`)) {
      exerciseService
        .updateExercise(formID, exerciseEntry)
        .then(returnedExercise => {
          setExerciseList(exerciseList.map(exercise => {
            if(exercise.id !== formID) { return exercise }
            else { return returnedExercise}
          }))
        })
        .then(console.log('Successfully edited entry'))
        .catch(error => console.log(error.response.data))
    }

    /* clear */
    resetFormName()
    resetFormID()
  }

  /* Used by Exercise component: Opens EditExercise form/component */
  const updateExercise = (id) => {
    console.log('updateExercise() via App.js')
    const elementWithID = exerciseList.find(exercise => exercise.id === id)

    setFormID(elementWithID.id)
    setEditName(elementWithID.name)
    setEditCategories(elementWithID.category)
    setEditVisible('') /* make component visible by replacing hidden class */
  }

  const hideEdit = () => {
    /* clear form */
    setFormID(-1)
    setEditName('')
    setEditCategories([])
    setEditVisible('hidden') /* Hide the component */
  }

  return (
    <div id="App">
      <Filter
        filterTypes={filterTypes}
        filtersSelector={filtersSelector}
        filterTerm={filterTerm}
        filterHandler={filterList}
      />
      <Exercises
        filterBy={filterTypes}
        filterTerm={filterTerm}
        exerciseList={exerciseList}
        chipSetsFilter={chipSetsFilter}
        deleteExercise={deleteExercise}
        updateExercise={updateExercise}
      />
      <AddExercise
        submitExercise={submitExercise}
        formName={formName} nameHandler={nameHandler}
        categoriesHandler={categoriesHandler}
        resetFormName={resetFormName}
      />
      <EditExercise 
        submitEdit={submitEdit}
        formName={editName} nameHandler={editNameHandler}
        formCategories={editCategories} 
        categoriesHandler={editCategoriesHandler}
        editVisible={editVisible} hideEdit={hideEdit}
        resetFormName={resetFormName} resetFormCategories={resetFormCategories}
      />
    </div>
  )
}

export default App