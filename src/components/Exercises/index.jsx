import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { SearchProvider } from '../SearchContext';

import debounce from 'lodash.debounce'; //implement yourself later
import { filterData } from '../../utilities/search-utilities';

import gymServices from '../../services/gymServices';

import { ExercisesSearch } from '../ExercisesSearch';
import { CreateExercises } from '../CreateExercises';
import { Card } from '../Card';
import { displayMessage } from '../Messages';

import DummyExercises from '../../data/DummyExercises';

import { 
  StyledExercises,
  StyledHeader, 
  StyledList, 
  StyledEmptyResult 
} from './style';

// Debounce delay in miliseconds
const DEBOUNCE_TIME = 500;
const DEBOUNCE_OPTIONS = {};
const debouncedFilter = debounce((...args) => filterData(...args),
  DEBOUNCE_TIME, DEBOUNCE_OPTIONS
);    

export const Exercises = () => {
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
    const asyncGetExercises = async() => { 
      const dbExercises = await gymServices.getExercises();
      // console.log(dbExercises);

      // Fallback for when the backend has no data
      dbExercises.length > 0
      ? setExercises(dbExercises)
      : setExercises(DummyExercises)
    };

    asyncGetExercises();
  }, []);

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
    if (!exercise.id) { 
      const tempId = exercises.length + 1;
      exercise.id = tempId;
    }

    if (exercise.name === "") {
      displayMessageTemporarily( "Your exercise needs a name!", "error");
      return;
    }

    const newExercises = [exercise, ...exercises];
    displayMessageTemporarily(`Added ${exercise.name}`, "success");


    setExercises(newExercises);
  }

  const deleteExercise = async (exerciseId) => {
    const updatedExercises = await gymServices.deleteExercise(exerciseId);
    console.log(updatedExercises);
    setExercises(updatedExercises);
  }

  const cardsList = (allExercises) => {
    const loadingCopy = "Retrieving exercises...";
    const noResultsCopy = "We couldn't find what you were looking for. Try refining your search."

    // Deal with empty cases: while loading & when a search returns nothing
    if (!allExercises || allExercises.length === 0) {
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
        <Card 
          exercise={exercise} 
          deleteExercise={deleteExercise}
          key={exercise.id} 
        />
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
