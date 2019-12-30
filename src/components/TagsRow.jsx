import React from 'react';
import styled from 'styled-components';

import Tag from './Tag';

const StyledRow = styled.div`

  height: ${props => props.collapsed ? '2rem' : 'auto'};
  ${'' /* white-space: ${props => props.collapsed ? 'nowrap' : 'wrap'}; */}
  overflow: ${props => props.collapsed ? 'hidden' : 'hidden'};
`

const TagsRow = ({ tags, collapsed }) => {
  const tagsList = tags.map((tag) => <Tag label={tag} key={tag} />);

  return (
    <StyledRow className="tags-row" collapsed={collapsed}>
      {tagsList}
    </StyledRow>
  );
};

export default TagsRow;
