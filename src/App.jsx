import React from 'react';

// import Navigation from './components/Navigation';
import Exercises from './components/Exercises';

import ThemeContext from './ThemeContext';

const App = () => {
  return (
    <ThemeContext>
      <div className="App">
        <Exercises />
      </div>
    </ThemeContext>
  );
};

export default App;
