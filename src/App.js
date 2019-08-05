import React, { useState, useEffect } from 'react'
import './App.css'
import Search from './Search'
import Exercises from './Exercises'
import exerciseService from './services/exerciseService'

const App = () => {
  const [ exerciseList, setExerciseList ] = useState([])

  useEffect(() => {
    exerciseService
      .getExercises()
      .then((retreievedExercises) => {
        setExerciseList(retreievedExercises)
      })
  }, [])




  return (
    <div className="App">
      <Search />
      <Exercises exerciseList={exerciseList}/>
    </div>
  )
}

export default App