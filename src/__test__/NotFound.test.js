import React from 'react';
import renderer from 'react-test-renderer';
import NotFound from '../components/NotFound';

it('404 page renders correctly', () => {
  const tree = renderer
    .create(<NotFound />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
