import React from 'react';
import Card from './Card';

const Exercises = ({ exercises }) => {
  const listExercises = (exercises) => {
    const cards = exercises.map(exercise => {
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
    return <>{cards}</>
  };

  return (
    <div className="Exercises">
      {exercises && listExercises(exercises)}
    </div>
  );
}

export default Exercises