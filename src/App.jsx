import React from 'react';

import ThemeContext from './ThemeContext';

import Navigation from './components/Navigation';
import Exercises from './components/Exercises';

const App = () => {
  return (
    <ThemeContext>
      <div className="App">
        <Exercises />
        <Navigation />
      </div>
    </ThemeContext>
  );
};

export default App;
