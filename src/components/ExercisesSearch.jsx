import React, { useState, useContext } from 'react';

import debounce from 'lodash.debounce'; //implement yourself later

import { filterData } from '../utilities/search-utilities';

import styled, { ThemeContext } from 'styled-components';


const StyledSearch = styled.div`
  margin: 0;
  padding: .75rem 1rem;

  background-color: white;

  input {
    width: 100%;
    height: 2rem;
    margin: 0;
    padding: 0.25rem 0.5rem;

    box-sizing: border-box;

    border-radius: 0.75rem;

    color: hsl(0, 0%, 59%);

    background-color: hsl(0, 0%, 90%);

    font-family: ${props => props.theme.fonts.standard};
    font-size: ${props => props.theme.fontSize.m};
    line-height: 1.25rem;

    :focus {
      outline: none;

      color: hsl(0, 0%, 20%);
      background-color: white;
    }
  }
`;

// Debounce delay in miliseconds
const DEBOUNCE_TIME = 900;

const debouncedFilter = debounce((
  data, queryValue, queryables, setActiveData
) => filterData(data, queryValue, queryables, setActiveData), DEBOUNCE_TIME);

const ExercisesSearch = ({ data, setActiveData, queryText, setQueryText }) => {

  // const [query, setQuery] = useState(''); // lift state up

  const [queryables] = useState({
    name: true,
    description: false,
    tags: true,
  });

  const handleChange = (event) => {
    console.log('Search input change');

    const queryValue = event.target.value;

    setQueryText(queryValue);
    debouncedFilter(data, queryValue, queryables, setActiveData);
  }

  const theme = useContext(ThemeContext);

  return (
    <StyledSearch className="ExercisesSearch" theme={theme}>
       <input
        type="text"
        value={queryText}
        placeholder={"Search"}
        onChange={(event) => handleChange(event)}
      />
    </StyledSearch>
  );
};

export default ExercisesSearch;
