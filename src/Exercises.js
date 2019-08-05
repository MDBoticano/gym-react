import React from 'react'
import Exercise from './Exercise'

const Exercises = ({ filterBy, filterTerm, exerciseList }) => {
  const filterIgnoreCase = filterTerm.toLowerCase();

  const filterExercisesByName = (exerciseArray) => {
    return exerciseArray.filter(exercise => {
      return exercise.name.toLowerCase().includes(filterIgnoreCase)
    }
  )}

  const filterExercisesByCategory = (exerciseArray) => {
    return exerciseArray.filter(exercise => {
      let categories = exercise.category
      let filteredCategories = categories.filter(category => {
        return category.toLowerCase().includes(filterIgnoreCase)
      })
      if (filteredCategories.length > 0) { 
        return true 
      } else {
        return false 
      }
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
          name={exercise.name} 
          category={exercise.category} 
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