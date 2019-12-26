import React, { useEffect } from 'react';



const SearchBar = () => {
  useEffect(() => {
    const filterableInputs = (filterables) => {
    
      const togglables = filterables.filter( (item) => {
        return (filterables[item])
      });

      const inputs = togglables.map( (item) => {
        return (
          <li key={item}>
            <input type="checkbox" name={item} />
            <label for={item}>{item}</label>
          </li>
        );
      })

      return (
        <ul>
          {inputs}
        </ul>
      );
    }


    const createSearchBar = (filterables) => {


      const objKeys = Object.keys(filterables);
      const objValues = Object.values(filterables);
      console.log('keys:', objKeys); // array of object keys
      console.log('filterable keys:', objValues);

      const CreatedSearch = () => {
        return (
          <div className="Search">
            {filterableInputs(filterables)}
          </div>
        );
      }

      return CreatedSearch;
    };

    const myExerciseModel = {
      id: false,
      name: true,
      description: true,
      tags: true
    };

    createSearchBar(myExerciseModel);

  }, []);


  return (
    <div className="SearchBar">
      Search Bar
    </div>
  );
};

export default SearchBar;
