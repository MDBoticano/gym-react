// Step 1: Get the fields you'll actually be searching
const getSearchableFields = (fields) => {
  // console.log('getting searchable fields');
  const keys = Object.keys(fields);
  const searchables = keys.filter((key) => fields[key]);
  // console.log('Retrieved searchables:', searchables);
  return searchables;
}

// Step 2: for each item, check if the query is in any of the searchable fields
const searchItem = (item, queryText, fields) => {

  const isAMatch = fields.some((key) => {
    let fieldValue = item[key];

    // Handle arrays
    if (Array.isArray(fieldValue)) {
      fieldValue = fieldValue.join(',');
    }

    // Handle multiple queries: OR
    const splitChar = ","; // character to specify different queries
    if (queryText.includes(splitChar)) {
      // Remove spaces before and after a comma, but not between queries
      const formattedQueryText = queryText.replace(/\s*,\s*/g, ",");

      const queries = formattedQueryText.split(splitChar);
      // console.log('queryable:', queries);

      const hasAMatch = queries.some((query) => {
        const match = (fieldValue.toLowerCase()).includes(query.toLowerCase());
        // console.log(query, 'in', fieldValue, ':', match);
        return match;
      });

      // console.log('queryables match:', hasAMatch);

      return hasAMatch;
    } else {
      return (fieldValue.toLowerCase()).includes(queryText.toLowerCase());
    }    
  });

  return isAMatch;
}

export const filterData = (unfilteredData, queryText, fields, callBack) => {
  console.log('Filtering data:', queryText);

  // Base case: no query
  if (queryText === '') {
    callBack(unfilteredData);
  }

  // Loop through the data and filter it
  
  // Step 1: reduce fields object into just fields that can be searched
  const searchableFields = getSearchableFields(fields);

  const filteredData = unfilteredData.filter((entry) => {
    return searchItem(entry, queryText, searchableFields);
  });

  console.log(filteredData);
  // return filteredData;
  callBack(filteredData);
};