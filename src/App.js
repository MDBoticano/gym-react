import React, { useState } from 'react';
import './App.css';


const Exercise = ({ name, region, weight, weightUnits, reps, date }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h3>{region}</h3>
      <p>{weight}{weightUnits} x {reps}</p>
    </div>
  )
}

const App = (props) => {
  const [formExerciseName, setFormExerciseName] = useState('name');
  const [formRegion, setFormRegion] = useState('(select)');
  const [formReps, setFormReps] = useState(0);
  const [formWeight, setFormWeight] = useState(0);
  const [formWeightUnits, setFormWEightUnits] = useState('kg');
  const [exercises, setExercises] = useState([
    { region: 'Back', name: 'Deadlift', weight: 100, weightUnits: 'kg', reps: 10, date: ''},
    { region: 'Legs', name: 'Deadlift', weight: 100, weightUnits: 'kg', reps: 10, date: ''},
    { region: 'Back', name: 'Deadlift', weight: 10, weightUnits: 'kg', reps: 100, date: ''},
    { region: 'Legs', name: 'Deadlift', weight: 120, weightUnits: 'kg', reps: 8, date: ''},
    { region: 'Back', name: 'Deadlift', weight: 100, weightUnits: 'kg', reps: 10, date: ''},
  ]);

  
  const displayExercises = () => exercises.map((exercise, i) => 
    <Exercise key={i} name={exercise.name}
      region={exercise.region} 
      weight={exercise.weight}
      weightUnits={exercise.weightUnits}
      reps={exercise.reps}
      date={exercise.date} />
  )


  const handleSubmit = (event) => {
    event.preventDefault();

    const exerciseToAdd = {
      name: formExerciseName,
      region: formRegion,
      weight: formWeight,
      weightUnits: formWeightUnits,
      reps: formReps,
      date: new Date()
    }

    setExercises(exercises.concat(exerciseToAdd));

    setFormExerciseName('');
    setFormRegion('(select)');
  }



  const formNameHandler = (event) => {
    setFormExerciseName(event.target.value);
  }

  const regionHandler = (event) => {
    setFormRegion(event.target.value);
  }

  const formRepsHandler = (event) => {
    setFormReps(event.target.value);
  }

  const formWeightHandler = (event) => {
    setFormWeight(event.target.value);
  }

  const formWeightUnitsHandler = (event) => {
    setFormWEightUnits(event.target.value);
  }

  return(
    <div id="App">
      <h1>Gym App</h1>
      <form onSubmit={handleSubmit}>
        
        <select required name={formRegion} value={formRegion} onChange={regionHandler}>
          <option value='back'>Back</option>
          <option value='legs'>Legs</option>
          <option value='chest'>Chest</option>
        </select>
        <input id="form-name" value={formExerciseName} onChange={formNameHandler} />
        <input id="form-reps" value={formReps} onChange={formRepsHandler} />
        <input id="form-weight" value={formWeight} onChange={formWeightHandler} />
        <select required name={formWeightUnits} onChange={formWeightUnitsHandler}>
          <option value='kg'>kg</option>
          <option value='lb'>lb</option>
        </select>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>

      <h2>Previous Exercises</h2>
      <div>{displayExercises()}</div>
    </div>
  )
}

export default App;
