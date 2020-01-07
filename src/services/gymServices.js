import axios from 'axios';
import DummyExercises from '../data/DummyExercises';
const baseUrl = 'http://localhost:3001/api/exercises';


const getExercises = async () => {
  const request = await axios.get(baseUrl);
  const exercises = request.data;

  const transformedExercises = exercises.map((exercise) => {
    const updatedExercise = { ...exercise };
    const tagObjects = updatedExercise.tags;
    const tagStrings = tagObjects.map((tagObj) => {
      return tagObj.name;
    });
    updatedExercise.tags = tagStrings;
    return updatedExercise;
  });
  return transformedExercises;
};

const createExercise = async (newExercise) => {
  console.log('Creating new exercise:', newExercise);
  const request = await axios.post(baseUrl, newExercise);
  console.log(request);
  console.log(request.data);
  return request.data;
};

const deleteExercise = async (id) => {
  await axios.delete(`${baseUrl}/${id}`);
  console.log('Deleted entry at id', `${id}`);

  const remainingExercises = await getExercises();
  if (remainingExercises.length === 0) {
    console.log('No more server exercises, return dummy data');
    return DummyExercises;
  } else {
    return remainingExercises;
  }
};

const updateExercise = async (updatedExercise, id) => {
  console.log(`Updating exercise ${id}:`, updatedExercise);

  const request = await axios.put(`${baseUrl}/${id}`, updatedExercise);
  return request.data;
};

export default { getExercises, createExercise, deleteExercise, updateExercise };
