import React from 'react';
import App from '../App';
import { create } from 'react-test-renderer';
import 'jest-styled-components';

test('App is app', () => {
  const component = create(
    <App />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});