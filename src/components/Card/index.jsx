import React, { useState, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import {
  StyledCard,
  CardTitle,
  CardToggle,
  CardDescription,
  CardActions,
  DeleteButton
} from './style';

import { TagsRow } from '../TagsRow';

export const Card = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const collapse = () => setCollapsed(!collapsed);

  const theme = useContext(ThemeContext);
  const { id, name, description, tags } = props.exercise;
  const deleteExercise = props.deleteExercise;
  return (
    <StyledCard theme={theme} collapsed={collapsed}>
      <div className="card-grid">
        <CardTitle>{name}</CardTitle>
        <CardToggle collapsed={collapsed} onClick={() => collapse()} />
      </div>
      <CardDescription collapsed={collapsed}>
        {description}
      </CardDescription>
      <CardActions>
        <TagsRow tags={tags} collapsed={collapsed}/>
        <DeleteButton onClick={() => deleteExercise(id)} />
      </CardActions>
    </StyledCard>
  );
};
