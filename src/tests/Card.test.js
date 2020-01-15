import React from 'react';
import { Card } from '../components/Card';
import ThemeContext from '../ThemeContext';

import { create } from 'react-test-renderer';
import 'jest-styled-components';

const sampleExercise = {
  name: 'Squat',
  description: 'A squat is a strength exercise in which the trainee lowers their hips from a standing position and then stands back up.',
  tags: [ 'Quads', 'Glutes', 'Abs' ],
  id: 1,
}

test('Card', () => {
  const component = create(
    <ThemeContext>
      <Card exercise={sampleExercise} />
    </ThemeContext>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});