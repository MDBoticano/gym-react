import React, { useState, useEffect } from 'react'
import './App.css'
import Search from './Search'
import Exercises from './Exercises'
import exerciseService from './services/exerciseService'

const App = () => {
  /* for Search/Filter component */
  const [ filterTerm, setFilterTerm ] = useState('')

  /* for Exercise component */
  const [ exerciseList, setExerciseList ] = useState([])

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

  return (
    <div id="App">
      <Search filterTerm={filterTerm} filterHandler={filterList} />
      <Exercises filterTerm={filterTerm} exerciseList={exerciseList}/>
    </div>
  )
}

export default App