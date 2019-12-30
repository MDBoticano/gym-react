import React, { useContext } from 'react';

import styled, { ThemeContext } from 'styled-components';

const StyledSearch = styled.div`
  margin: 0;
  padding: .75rem 1rem;

  background-color: white;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 2rem;
  margin: 0;
  padding: 0.25rem 0.5rem;

  box-sizing: border-box;

  border-radius: 0.75rem;

  color: ${(value) => value !== '' ? "hsl(0, 0%, 20%)" : "hsl(0, 0%, 59%)"};

  background-color: ${(value) => value !== '' ? "hsl(0, 0%, 95%)" : "hsl(0, 0%, 90%)"};

  font-family: ${props => props.theme.fonts.standard};
  font-size: ${props => props.theme.fontSize.m};
  line-height: 1.25rem;

  :focus {
    outline: none;

    color: hsl(0, 0%, 20%);
    background-color: white;
  }
`;

const ExercisesSearch = ({ query, setQuery }) => {
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

export default ExercisesSearch;
