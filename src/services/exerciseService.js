import axios from 'axios'
// const baseURL = '/exerciseList'
const baseURL = 'http://localhost:3001/exerciseList'

/* HTTP GET Request */
const getExercises = () => {
  const request = axios.get(baseURL)
  return request.then(response => {
    console.log('Retreived data from server')
    return response.data
  })
}

export default { getExercises } 