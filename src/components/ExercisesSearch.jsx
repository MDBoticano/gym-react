import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

const StyledSearch = styled.div`
  margin: 0;
  padding: 2rem 1rem 1rem;

  background-color: white;
`;


const ExercisesSearch = ({ data, setActiveData }) => {
  const [query, setQuery] = useState('');

  const [queryables] = useState({
    name: true,
    description: false,
    tags: true,
  });

  useEffect( () => {
    if (query === '') {
      setActiveData(data);
    }
    else { 
      const activeData = [];

      data.forEach( (item) => {
        Object.keys(queryables).some( (objKey) => {
          if (queryables[objKey]) { 
            const itemKeyVal = item[objKey];
            let searchString = '';
            
            if (typeof itemKeyVal === "string") {
              searchString = itemKeyVal.toLowerCase();
            } else if (Array.isArray(itemKeyVal)) {
              searchString = itemKeyVal.join(',').toLowerCase();
            }

            if (searchString.includes(query.toLowerCase())) {
              activeData.push(item);
              return true; // breaks the some loop
            }
          }
          return false;
        });
      });

      setActiveData(activeData);
    }
  }, [query, queryables, data, setActiveData]);

  return (
    <StyledSearch className="ExercisesSearch">
      <input
        type="text"
        value={query}
        placeholder={"search"}
        onChange={(e) => setQuery(e.target.value)}
      />
    </StyledSearch>
  );
};

export default ExercisesSearch;
