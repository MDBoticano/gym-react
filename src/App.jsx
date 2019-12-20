import React from 'react';

import Exercises from './components/Exercises';
import Card from './components/Card';

const App = () => {
  return (
    <div className="App">
      <Exercises>

      <Card 
        title={"Push Ups"}
        description={"This is a description of what the exercise entails or does not or what is important and necessarr…"}
      />
      </Exercises>
    </div>
  );
};

export default App;
