import React from 'react';

import Navigation from './components/Navigation';
import Exercises from './components/Exercises';
import Card from './components/Card';
import TagsRow from './components/TagsRow';

import Theme from './Theme';

import DummyExercises from './data/DummyExercises';

const listExercises = (exercises) => {
  const cards = exercises.map(exercise => {
    const { id, name, description, tags } = exercise;

    return (
      <Card className="Card" title={name} description={description} key={id}>
        <TagsRow tags={tags} />
      </Card>
    );
  });
  return <>{cards}</>
};

const App = () => {
  return (
    <Theme>
      <div className="App">
        <Exercises>
          {DummyExercises && listExercises(DummyExercises)}
        </Exercises>
        <Navigation />
      </div>
    </Theme>
  );
};

export default App;
