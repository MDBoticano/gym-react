import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

const Button = styled.button`
  border: solid 1px hsl(0, 0%, 59%);
  padding: 0.25rem 0.5rem;

  border-radius: 0.25rem;

  background-color: white;

  font-size: ${props => props.theme.fontSize.s};
  line-height: 1.25rem;
  color: hsl(0, 0%, 59%);

  &:not(:last-child) {
    margin-right: 0.25rem;
  }
`;

const Tag = (props) => {
  const theme = useContext(ThemeContext);
  return (
    <Button className="Tag" theme={theme}>
      {props.label}
    </Button>
  );
};

export default Tag;
