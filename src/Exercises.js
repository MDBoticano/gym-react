import React from 'react'
import Exercise from './Exercise'

const Exercises = ({ filterTerm, exerciseList }) => {

  const filterExercises = (exerciseArray) => {
    const ignoreFilterCase = filterTerm.toLowerCase();

    return exerciseArray.filter(exercise => {
      return exercise.name.toLowerCase().includes(ignoreFilterCase)
    })
  }

  const exercisesToDisplay = filterExercises(exerciseList)

  const displayExerciseList = (exerciseList) => {
    return exerciseList.map((exercise) => {
      return <Exercise key={exercise.name} name={exercise.name} category={exercise.category} />
    })
  }

  return (
    <div id="Exercises">
      {displayExerciseList(exercisesToDisplay)}
    </div>
  )
}

export default Exercises