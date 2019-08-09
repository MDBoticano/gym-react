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

/* Update: HTTP PUT request */
const updateExercise = (exerciseID, updatedExercise) => {
  const request = axios.put(`${baseURL}/${exerciseID}`, updatedExercise)
  return request.then(response => response.data)
}

export default { getExercises, createExercise, updateExercise, deleteExercise } 