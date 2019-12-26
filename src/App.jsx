import React from 'react';

// import Navigation from './components/Navigation';
// import Exercises from './components/Exercises';
import SearchBar from './components/SearchBar';

import ThemeContext from './ThemeContext';

// import DummyExercises from './data/DummyExercises';


const App = () => {
  return (
    <ThemeContext>
      <div className="App">
        <SearchBar />
        {/* <Exercises exercises={DummyExercises} /> */}
        {/* <Navigation /> */}
      </div>
    </ThemeContext>
  );
};

export default App;
