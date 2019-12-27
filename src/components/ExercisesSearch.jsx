import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

const StyledSearch = styled.div`
  margin: 0;
  padding: 2rem 1rem 1rem;

  background-color: white;
`;


const ExercisesSearch = ({ data, setter }) => {
  const [query, setQuery] = useState('');

  useEffect( () => {
    if (query === '') {
      setter(data);
    }
  }, [query, data, setter]);

  return (
    <StyledSearch className="ExercisesSearch">
      <input
        type="text"
        value={query}
        placeholder={"search"}
        onChange={(e) => setQuery(e.target.value)}
      />
    </StyledSearch>
  );
};

export default ExercisesSearch;
