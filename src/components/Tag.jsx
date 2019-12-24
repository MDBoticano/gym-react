import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border: solid 1px hsl(0, 0%, 59%);
  padding: calc(0.25rem + 1px) 0.5rem;

  border-radius: 0.25rem;

  background-color: white;

  font-size: 1rem;
  line-height: 1.25rem;
  color: hsl(0, 0%, 59%);

  &:not(:last-child) {
    margin-right: 0.25rem;
  }
`;

const Tag = (props) => {
  return (
    <Button className="Tag">
      {props.label}
    </Button>
  );
};

export default Tag;
