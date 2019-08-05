import React from 'react'
import Exercise from './Exercise'

const Exercises = ({ exerciseList }) => {
  const displayExerciseList = (exerciseList) => {
    return exerciseList.map((exercise) => {
      return <Exercise key={exercise.name} name={exercise.name} category={exercise.category} />
    })
  }

  return (
    <div id="Exercises">
      {displayExerciseList(exerciseList)}
    </div>
  )
}

export default Exercises