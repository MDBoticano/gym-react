import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { StyledSearch, StyledInput } from './style';

export const ExercisesSearch = ({ query, setQuery }) => {
  const theme = useContext(ThemeContext);

  return (
    <StyledSearch className="ExercisesSearch" theme={theme}>
       <StyledInput
        type="text"
        value={query}
        placeholder={"Search"}
        onChange={(event) => setQuery(event.target.value)}
      />
    </StyledSearch>
  );
};
