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
    setFilterTypes({...filterTypes, "category": true})
    setFilterTerm(chipName)
  }

  const makeId = () => {
    /* +2 since IDs are 1-indexed */
    return exerciseList.length + 2
  }

  const submitExercise = (event) => {
    event.preventDefault()
    console.log('Name:', formName)
    console.log('Categories:', formCategories)

    const splitCategories = formCategories.split(' ')
    console.log(splitCategories)

    const exerciseEntry = {
      name: formName,
      id: makeId(),
      category: splitCategories,
      date: new Date().toISOString()
    }

    exerciseService
      .createExercise(exerciseEntry)
      .then(returnedEntry => {
        setExerciseList(exerciseList.concat(returnedEntry))
      })
      .then(console.log('Successfully added entry'))
      .catch(error => console.log(error.response.data))

    /* clear */
    setFormName('')
    setFormCategories('')
  }

  const nameHandler = (event) => {
    setFormName(event.target.value)
  }

  const categoriesHandler = (event) => {
    setFormCategories(event.target.value)
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
      />
      <AddExercise
        submitExercise={submitExercise} 
        nameHandler={nameHandler} formName={formName}
        categoriesHandler={categoriesHandler} formCategories={formCategories}
      />
    </div>
  )
}

export default App