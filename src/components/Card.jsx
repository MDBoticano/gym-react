import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import TagsRow from './TagsRow';

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

  font-family: ${props => props.theme.fonts.standard};
  font-size: ${props => props.theme.fontSize.xl};
  line-height: 1.75rem;
`;

const CardDescription = styled.p`
  margin: 0;
  margin-top: 5px;

  max-height: 2.5rem;
  overflow: hidden;
  text-overflow: ellipsis;

  font-family: ${props => props.theme.fonts.standard};
  font-size: ${props => props.theme.fontSize.m};
  line-height: 1.25rem;

  color: gray;
`;

const Card = (props) => {
  const theme = useContext(ThemeContext);
  return (
    <StyledCard theme={theme}>
      <CardTitle>{props.title}</CardTitle>
      <CardDescription>{props.description}</CardDescription>
      <TagsRow tags={props.tags} />
    </StyledCard>
  );
};

export default Card;
