import React from 'react';
import styled from 'styled-components';

const StyledTag = styled.button`
  border: solid 1px hsl(0, 0%, 59%);
  padding: 0.25rem 0.5rem;

  border-radius: 0.25rem;

  background-color: white;

  &:not(first-child) {
    margin-right: 0.25rem;
  }
`

const StyledTagText = styled.p`
  padding: 0;
  margin: 0;

  font-size: 1rem;
  line-height: 1.25rem;
  color: hsl(0, 0%, 59%);
`

const Tag = (props) => {
  return (
    <StyledTag attribute={props.style}>
      <StyledTagText>{props.text}</StyledTagText>
    </StyledTag>
  );
};

export default Tag;