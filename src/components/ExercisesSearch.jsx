import React, { useState } from 'react';

import styled from 'styled-components';

import { debounce } from 'lodash'; //implement yourself later

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

  const filterActiveData = (query) => {
    console.log('filtering...');
    if (query === '') {
      console.log('empty query, showing all');
      setActiveData(data);
    }
    else { 
      console.log(`searching for ${query}...`);
      const activeData = [];

      data.forEach((item) => {
        Object.keys(queryables).some((objKey) => {
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
  }

  const debounceQueryChange = debounce(
    () => filterActiveData(query), 
    2000
  );

  const handleQueryChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    
    debounceQueryChange(event);
  };


  // useEffect(() => { 
  //   filterActiveData();  
  // }, [query, queryables, data, setActiveData]);

  return (
    <StyledSearch className="ExercisesSearch">
      <input
        type="text"
        value={query}
        placeholder={"search"}
        onChange={(e) => handleQueryChange(e)}
      />
    </StyledSearch>
  );
};

export default ExercisesSearch;
