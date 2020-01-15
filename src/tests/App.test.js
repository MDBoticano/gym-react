import React from 'react';
import App from '../App';
import { create } from 'react-test-renderer';

test('App is app', () => {
  const component = create(
    <App />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});