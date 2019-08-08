import axios from 'axios'
// const baseURL = '/api/exerciseList'
const baseURL = 'http://localhost:3001/exerciseList'

/* Read : HTTP GET Request */
const getExercises = () => {
  const request = axios.get(baseURL)
  return request.then(response => {
    console.log('Retreived data from server')
    return response.data
  })
}

/* Create : HTTP POST request */
const createExercise = (newExercise) => {
  const request = axios.post(baseURL, newExercise)
  return request.then(response => {
    console.log('Added new exercises to server')
    return response.data
  })
}

/* Delete: HTTP DELETE request */
const deleteExercise = (exerciseID) => {
  const request = axios.delete(`${baseURL}/${exerciseID}`)
  return request.then(() => {
    return getExercises()
  })
}

// const deleteEntry = (id) => {
//   const request = axios.delete(`${baseUrl}/${id}`)
//   console.log('Deleted entry at id', `${id}`)
//   return request.then(() => {
//     // axios.delete by default doesn't return a promise, so we make one
//     // We use getEntries to retrieve the updated data and return it as a promise
//     return getEntries()
//   })
// }

export default { getExercises, createExercise, deleteExercise } 