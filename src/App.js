import React, { useState, useEffect } from 'react'
import './App.css'
import Filter from './Filter'
import Exercises from './Exercises'
import AddExercise from './AddExercise'
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
  const [formID, setFormID] = useState(-1)

  const [formIsVisible, setFormIsVisible] = useState(false)

  const [isEditingEntry, setIsEditingEntry] = useState('false')

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
    /* Ensure filtering by categories is enabled */
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

   

    if(isEditingEntry) {
      console.log('submit makes update request')
      
      setIsEditingEntry(false)
    }

    else if (!isEditingEntry) {
      if (window.confirm('Do you want to add?')) {
        exerciseService
          .createExercise(exerciseEntry)
          .then(returnedEntry => {
            setExerciseList(exerciseList.concat(returnedEntry))
          })
          .then(console.log('Successfully added entry'))
          .catch(error => console.log(error.response.data))
      }
    }

    /* regardless of confirmation response, reset form name */
    resetFormName()
    // setFormIsVisible(false)
  }

  const nameHandler = (event) => {
    setFormName(event.target.value)
  }

  const categoriesHandler = (categories) => {
    setFormCategories(categories)
  }

  const formIDHandler = (event) => {
    setFormID(event.target.value)
  }

  const resetFormName = () => {
    setFormName('')
  }

  const deleteExercise = (id) => {
    /* get name at id */
    let objectOfId = exerciseList.find(exercise => exercise.id === id)

    if(window.confirm(`Do you want to delete ${objectOfId.name}?`)) {
      exerciseService
        .deleteExercise(id)
        .then(returnedEntries => {
          setExerciseList(returnedEntries)
        })
    }
  }

  const updateExercise = (id) => {
    console.log(id)

    /* open create form */
    setFormIsVisible(true)
    console.log('App state', true)
    
    /* pre-load current data */

    /* turn flag on to make submit a PUT request instead */
    setIsEditingEntry(true)
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
        updateExercise={updateExercise}
        deleteExercise={deleteExercise}
      />
      <AddExercise
        formVisible={formIsVisible} setFormVisible={setFormIsVisible}
        submitExercise={submitExercise}
        nameHandler={nameHandler} formName={formName}
        formCategories={formCategories} categoriesHandler={categoriesHandler}
        formID={formID} formIDHandler={formIDHandler}
        resetFormName={resetFormName}
      />
    </div>
  )
}

export default App