import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import NotFound from '../components/NotFound';

it('404 page renders correctly', () => {
  const tree = renderer
    .create(<Router><NotFound /></Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
