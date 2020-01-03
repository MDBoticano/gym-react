import axios from 'axios';
// import DummyExercises from '../data/DummyExercises';
const baseUrl = 'http://localhost:3001/api/exercises';


const getExercises = async () => {
  const request = await axios.get(baseUrl);
  const exercises = request.data;

  // console.log("request data:", exercises);
  const transformedExercises = exercises.map((exercise) => {
    // Get only the string values of the tags
    const updatedExercise = { ...exercise };
    const tagObjects = updatedExercise.tags;
    const tagStrings = tagObjects.map((tagObj) => {
      return tagObj.name;
    });
    updatedExercise.tags = tagStrings;
    return updatedExercise;
  });

  // return exercises;
  // return DummyExercises;
  // console.log(transformedExercises);
  return transformedExercises;
}


export default { getExercises };
