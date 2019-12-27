import React, { useState } from 'react';

import ExercisesSearch from './ExercisesSearch';
import Card from './Card';

import DummyExercises from '../data/DummyExercises';

const Exercises = () => {
  const exercises = DummyExercises;
  const [activeExercises, setActiveExercises] = useState([]);

  const listExercises = (exercises) => {
    // console.log('making list of exercises:', exercises);
    const cards = exercises.map((exercise) => {
      const { id, name, description, tags } = exercise;
  
      return (
        <Card
          className="Card"
          title={name}
          description={description} 
          tags={tags}
          key={id}
        />
      );
    });
    return <div className="ExercisesList">{cards}</div>
  };

  return (
    <div className="Exercises">
      <header>
        <ExercisesSearch data={exercises} setActiveData={setActiveExercises} />
      </header>
      {activeExercises && listExercises(activeExercises)}
    </div>
  );
}

export default Exercises;
