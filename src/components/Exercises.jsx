import React, { useState, useEffect, useContext } from 'react';

import ExercisesSearch from './ExercisesSearch';
import { CreateExercises } from './CreateExercises';
import Card from './Card';
import { displayMessage } from './Messages';


import DummyExercises from '../data/DummyExercises';

import debounce from 'lodash.debounce'; //implement yourself later
import { filterData } from '../utilities/search-utilities';

import { SearchProvider } from './SearchContext';
import styled, { ThemeContext } from 'styled-components';


// Debounce delay in miliseconds
const DEBOUNCE_TIME = 500;
const DEBOUNCE_OPTIONS = {};
const debouncedFilter = debounce((...args) => filterData(...args),
  DEBOUNCE_TIME, DEBOUNCE_OPTIONS
);

const Exercises = () => {
  const [message, setMessage] = useState({ 
    message: "", 
    messageType: "" 
  });
  const [exercises, setExercises] = useState(DummyExercises);
  const [activeExercises, setActiveExercises] = useState([]);
  const [queryText, setQueryText] = useState('');
  const [queryables] = useState({
    name: true,
    description: false,
    tags: true,
  });

  useEffect(() => {
    debouncedFilter(exercises, queryText, queryables, setActiveExercises);
  }, [exercises, queryText, queryables]);

  const displayMessageTemporarily = (message, messageType, time = 3000) => {
    setMessage({ message: message, messageType: messageType});

    setTimeout(() => {
      setMessage({ message: "", messageType: ""})
    }, time);
  }

  const addExercise = (exercise) => {
    const tempId = exercises.length + 1;
    exercise.id = tempId;

    if (exercise.name === "") {
      displayMessageTemporarily( "Your exercise needs a name!", "error");
      return;
    }

    const newExercises = [exercise, ...exercises];
    displayMessageTemporarily(`Added ${exercise.name}`, "success");


    setExercises(newExercises);
  }

  const cardsList = (allExercises) => {
    const loadingCopy = "Retrieving exercises...";
    const noResultsCopy = "We couldn't find what you were looking for. Try refining your search."

    // Deal with empty cases: while loading & when a search returns nothing
    if (allExercises.length === 0) {
      const makeEmptyResultMessage = (query) => {
        return query === '' ? loadingCopy : noResultsCopy;
      }
      return (
        <StyledEmptyResult>
          {makeEmptyResultMessage(queryText)}
        </StyledEmptyResult>
      );
    } else {
      const exerciseCards = allExercises.map((exercise) => (
        <Card className="Card" exercise={exercise} key={exercise.id} />
      ));

      return exerciseCards;
    }
  }

  const theme = useContext(ThemeContext);
  const searchContext = { setQuery: setQueryText };

  return (
    <SearchProvider value={searchContext}>
      <StyledExercises theme={theme}>
        <StyledHeader>
          <p className="page-title">Exercises</p>
          <ExercisesSearch query={queryText} setQuery={setQueryText} />
          {displayMessage(message.message, message.messageType)}
        </StyledHeader>
        <StyledList className="ExercisesList">
          {cardsList(activeExercises)}
        </StyledList>
        <CreateExercises addExercise={addExercise} />
      </StyledExercises>
    </SearchProvider>
  );
};

const StyledExercises = styled.div`
  height: 100vh;

  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
`;

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
`;

const StyledList = styled.div`
  margin: 0;
  margin-bottom: 4rem; /* height of add exercise button */
  padding: 0 0.5rem;

  overflow: auto;
`;

const StyledEmptyResult = styled.div`
  margin: 0.5rem 0;
  padding: 1rem;

  color: hsl(0, 0%, 29%);

  font-family: ${props => props.theme.fonts.standard};
  font-size: ${props => props.theme.fontSize.l};

  text-align: center;
`;

export default Exercises;
