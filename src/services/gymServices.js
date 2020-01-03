import axios from 'axios';
// import DummyExercises from '../data/DummyExercises';
const baseUrl = 'http://localhost:3001/api/exercises';


const getExercises = async () => {
  const request = await axios.get(baseUrl);
  const exercises = request.data;

  // console.log("request data:", exercises);

  return exercises;
  // return DummyExercises;
}


export default { getExercises };
