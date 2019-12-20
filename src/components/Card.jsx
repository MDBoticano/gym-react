import React from 'react';
import styled from 'styled-components';

const StyledCardTitle = styled.p`
  margin: 0;

  font-family: 'SF Pro Display';
  font-size: 1.5rem;
  line-height: 1.75rem;
`

const StyledCard = styled.div`

  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);

  &:hover {
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
  }

`

const StyledCardDescription = styled.p`
  margin: 0;
  margin-top: 5px;

  max-height: 2.5rem;
  overflow: hidden;
  text-overflow: ellipsis;

  font-family: 'SF Pro Text';
  font-size: 1rem;
  line-height: 1.125rem;

  color: gray;
`

const CardTitle = (props) => {
  return (
    <StyledCardTitle attribute={props.style}>
      {props.title}
    </StyledCardTitle>
  );
}

const CardDescription = (props) => {
  return (
    <StyledCardDescription attribute={props.style}>
      {props.description}
    </StyledCardDescription>
  )
}

const Card = (props) => {
  return (
    <StyledCard attribute={props.style}>
      <CardTitle title={props.title} />
      <CardDescription description={props.description} />
    </StyledCard>
  );
}



export default Card;