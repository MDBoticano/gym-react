import gymServices from './gymServices';

const exerciseID = "5e13dc571bb9070dc606cf06";
const updatedExercise =  {
  "name": "Ab Crunches",
  "description": "",
  "tags": ["5e0e9a74fa88e28b0f6e035e"]
};

describe('the function updateExercise...', ()=> {
  it('returns the successfully updated exercise' , async () => {
    const result = await gymServices.updateExercise(updatedExercise, exerciseID);
    console.log(result);
    expect(result).toStrictEqual({
      ...updatedExercise, id: exerciseID
    });
  });
});