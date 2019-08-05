import React, { useState, useEffect } from 'react'
import './App.css'
import Filter from './Filter'
import Exercises from './Exercises'
import exerciseService from './services/exerciseService'

const App = () => {
  const defaultFilterTypes = {
    "name": true,
    "category": true
  }
  const [filterTerm, setFilterTerm] = useState('')
  const [filterTypes, setFilterTypes] = useState(defaultFilterTypes)
  const [exerciseList, setExerciseList] = useState([])

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
    setFilterTerm(chipName)
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
    </div>
  )
}

export default App