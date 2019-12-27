import React, { useState } from 'react';

import ExercisesSearch from './ExercisesSearch';
import Card from './Card';

import DummyExercises from '../data/DummyExercises';

const Exercises = () => {
  const exercises = DummyExercises;
  const [activeExercises, setActiveExercises] = useState([]);

  const cardsList = activeExercises.map((exercise) => (
    <Card className="Card" exercise={exercise} key={exercise.id} />
  ));

  return (
    <div className="Exercises">
      <header>
        <ExercisesSearch data={exercises} setActiveData={setActiveExercises} />
      </header>
      <div className="ExercisesList">
        {cardsList}
      </div>
    </div>
  );
}

export default Exercises;
