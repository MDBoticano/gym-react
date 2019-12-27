import { debounce } from 'lodash'; //implement yourself later

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

    return fieldValue.includes(queryText);
  });

  return isAMatch;
}

export const filterData = debounce((unfilteredData, queryText, fields, callBack) => {
  console.log('Filtering data:', queryText);

  // Base case: no query
  if (queryText === '') {
    return unfilteredData;
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
}, 1000);
