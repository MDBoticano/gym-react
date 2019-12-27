import React from 'react';
import styled from 'styled-components';

import Tag from './Tag';

const StyledRow = styled.div`
  height: 2rem;
  overflow: hidden;
`

const TagsRow = ({ tags }) => {
  const tagsList = tags.map((tag) => <Tag label={tag} key={tag} />);

  return (
    <StyledRow className="tags-row">
      {tagsList}
    </StyledRow>
  );
};

export default TagsRow;