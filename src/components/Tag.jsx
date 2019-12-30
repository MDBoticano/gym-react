import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import SearchContext from './SearchContext';

const Button = styled.button`
  padding: 0.25rem 0.5rem;

  border: solid 1px hsl(0, 0%, 59%);

  border-radius: 0.25rem;
  
  font-size: ${props => props.theme.fontSize.s};
  line-height: 1.25rem;

  color: hsl(0, 0%, 59%);
  background-color: white;
  outline: none;

  &:not(:last-child) {
    margin-right: 0.25rem;
  }

  :hover {
    border: solid 1px hsl(0, 0%, 39%);
    color: white;
    background-color: hsl(0, 0%, 39%);
  }
`;

const Tag = ({ label }) => {
  const theme = useContext(ThemeContext);
  const { setQuery } = useContext(SearchContext);
  return (
    <Button className="Tag" theme={theme} onClick={() => setQuery(label)}>
      {label}
    </Button>
  );
};

export default Tag;
