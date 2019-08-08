import React from 'react'
import Exercise from './Exercise'
import './Exercise.css'
// import exerciseService from './services/exerciseService';

const Exercises = ({ filterBy, filterTerm, exerciseList, chipSetsFilter, 
  deleteExercise }) => {
  const filterIgnoreCase = filterTerm.toLowerCase();

  const filterExercisesByName = (exerciseArray) => {
    return exerciseArray.filter(exercise => {
      return exercise.name.toLowerCase().includes(filterIgnoreCase)
    }
  )}

  const filterExercisesByCategory = (exerciseArray) => {
    return exerciseArray.filter(exercise => {
      let filteredCategories = exercise.category.filter(category => {
        return category.toLowerCase().includes(filterIgnoreCase)
      })
      if (filteredCategories.length > 0) { return true } else { return false }
    })
  }
  
  let allFiltered = []

  if (filterBy.name) { 
    allFiltered = allFiltered.concat(filterExercisesByName(exerciseList))
  }
  if (filterBy.category) { 
    allFiltered = allFiltered.concat(filterExercisesByCategory(exerciseList))
  }

  /* Remove duplicates */
  const exercisesToDisplay = [...new Set(allFiltered)]

  const displayExerciseList = (exerciseList) => {
    return exerciseList.map((exercise) => {
      return (
        <Exercise 
          key={exercise.name}
          id={exercise.id} 
          name={exercise.name} 
          category={exercise.category}
          chipSetsFilter={chipSetsFilter} 
          deleteExercise={deleteExercise}
        />)
    })
  }

  return (
    <div id="Exercises">
      {displayExerciseList(exercisesToDisplay)}
    </div>
  )
}

export default Exercises