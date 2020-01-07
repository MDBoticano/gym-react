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
import { UpdateExercises } from '../UpdateExercises';

export const Card = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const collapse = () => setCollapsed(!collapsed);

  const theme = useContext(ThemeContext);
  const { exercise, deleteExercise} = props;
  const { id, name, description, tags } = exercise;
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
        <UpdateExercises exercise={exercise} />
        <DeleteButton onClick={() => deleteExercise(id)} />
      </CardActions>
    </StyledCard>
  );
};
