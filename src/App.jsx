import React from 'react';

import Navigation from './components/Navigation';
import Exercises from './components/Exercises';
import Card from './components/Card';
import Tag from './components/Tag';

import DummyExercises from './data/DummyExercises';

const listTags = (tags) => {
  const allTags = tags.map(tag => <Tag text={tag} key={tag} />);
  return (
    <div className="tags-row">
      {allTags}
    </div>
  );
}

const listExercises = (exercises) => {
  const cards = exercises.map(exercise => {
    const { id, name, description, tags } = exercise;

    return (
      <Card title={name} description={description} key={id}>
        {listTags(tags)}
      </Card>
    );
  });
  return <>{cards}</>
}

const App = () => {
  return (
    <div className="App">
      <Exercises>
        {DummyExercises && listExercises(DummyExercises)}
      </Exercises>
      <Navigation />
    </div>
  );
};

export default App;
