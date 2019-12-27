import React, { useState } from 'react';

import styled from 'styled-components';

import debounce from 'lodash.debounce'; //implement yourself later

import { filterData } from '../utilities/search-utilities';


const StyledSearch = styled.div`
  margin: 0;
  padding: 2rem 1rem 1rem;

  background-color: white;
`;

// Debounce delay in miliseconds
const DEBOUNCE_TIME = 900;

const debouncedFilter = debounce((
  data, queryValue, queryables, setActiveData
) => filterData(data, queryValue, queryables, setActiveData), DEBOUNCE_TIME);

const ExercisesSearch = ({ data, setActiveData }) => {

  const [query, setQuery] = useState('');

  const [queryables] = useState({
    name: true,
    description: false,
    tags: true,
  });

  const handleChange = (event) => {
    const queryValue = event.target.value;

    setQuery(queryValue);
    debouncedFilter(data, queryValue, queryables, setActiveData);
  }

  return (
    <StyledSearch className="ExercisesSearch">
       <input
        type="text"
        value={query}
        placeholder={"search"}
        onChange={(e) => handleChange(e)}
      />
    </StyledSearch>
  );
};

export default ExercisesSearch;
