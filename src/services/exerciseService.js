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

export default { getExercises, createExercise } 