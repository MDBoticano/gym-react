import React from 'react';
import styled from 'styled-components';

import Tag from './Tag';

const StyledRow = styled.div`
  height: 2rem;
  overflow: hidden;
`

const TagsRow = ({ tags }) => {
  const listTags = (tags) => {
    const allTags = tags.map(tag => <Tag label={tag} key={tag} />);
    return allTags;
  };

  return (
    <StyledRow className="tags-row">
      {listTags(tags)}
    </StyledRow>
  );
};

export default TagsRow;
