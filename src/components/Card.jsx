import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  margin: 0.5rem 0;
  padding: 1rem;
  border-radius: 0.5rem;

  background-color: white;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);

  &:hover {
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
  }
`;

const CardTitle = styled.p`
  margin: 0;

  font-family: 'SF Pro Display';
  font-size: 1.5rem;
  line-height: 1.75rem;
`;

const CardDescription = styled.p`
  margin: 0;
  margin-top: 5px;

  max-height: 2.5rem;
  overflow: hidden;
  text-overflow: ellipsis;

  font-family: 'SF Pro Text';
  line-height: 1.25rem;
  font-size: 1rem;


  color: gray;
`;

const Card = (props) => {
  return (
    <StyledCard>
      <CardTitle>{props.title}</CardTitle>
      <CardDescription>{props.description}</CardDescription>
      {props.children}
    </StyledCard>
  );
};

export default Card;
