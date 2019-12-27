
const ExercisesSearch = ({ data, setActiveData }) => {




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
    2000, { 'leading': false, 'trailing': true }
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

  );
};