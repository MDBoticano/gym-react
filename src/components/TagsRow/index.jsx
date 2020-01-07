import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import SearchContext from '../SearchContext';

import { StyledButton, StyledRow } from './style';

export const Tag = ({ label }) => {
  const theme = useContext(ThemeContext);
  const { setQuery } = useContext(SearchContext);
  return (
    <StyledButton className="Tag" theme={theme} onClick={() => setQuery(label)}>
      {label}
    </StyledButton>
  );
};

export const TagsRow = ({ tags, collapsed }) => {
  const tagsList = tags.map((tag) => <Tag label={tag} key={tag} />);

  return (
    <StyledRow className="tags-row" collapsed={collapsed}>
      {tagsList}
    </StyledRow>
  );
};
