import React, { useState, useEffect, useContext } from 'react';

import ExercisesSearch from './ExercisesSearch';
import Card from './Card';

import DummyExercises from '../data/DummyExercises';

import styled, { ThemeContext } from 'styled-components';

const StyledExercises = styled.div`
  max-height: 100vh;

  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
`

const StyledHeader = styled.header`
  margin: 0;
  padding-top: 1.5rem;

  background-color: white;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

  /* so cards are below the header despite sibling */
  z-index: 100; 

  .page-title {
    margin: 0;
    padding: 0;

    padding-left: 1rem;

    font-family: ${props => props.theme.fonts.standard};
    font-size: ${props => props.theme.fontSize.xxl};
    line-height: 2.5rem;
  }
`

const StyledList = styled.div`
  margin: 0;
  margin-bottom: 4.5rem;
  padding: 0 0.5rem;

  overflow: auto;
`

const Exercises = () => {
  const exercises = DummyExercises;
  const [activeExercises, setActiveExercises] = useState([]);

  useEffect(() => {
    setActiveExercises(exercises);
  }, [exercises]);

  const cardsList = activeExercises.map((exercise) => (
    <Card className="Card" exercise={exercise} key={exercise.id} />
  ));

  const theme = useContext(ThemeContext);

  return (
    <StyledExercises theme={theme}>
      <StyledHeader>
        <p className="page-title">Exercises</p>
        <ExercisesSearch data={exercises} setActiveData={setActiveExercises} />
      </StyledHeader>
      <StyledList className="ExercisesList">
        {cardsList}
      </StyledList>
    </StyledExercises>
  );
}

export default Exercises;
