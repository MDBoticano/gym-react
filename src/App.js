import React, { useState, useEffect } from 'react'
import './App.css'
import Filter from './Filter'
import Exercises from './Exercises'
import exerciseService from './services/exerciseService'

const App = () => {
  /* for Search/Filter component */
  const [filterTerm, setFilterTerm] = useState('')
  const [filterTypes, setFilterTypes] = useState({
    "name": true,
    "category": true
  })

  /* for Exercise component */
  const [exerciseList, setExerciseList] = useState([])

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
      />
    </div>
  )
}

export default App