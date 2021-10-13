import React from 'react';
import renderer from 'react-test-renderer';
import Spinner from '../components/Spinner';

it('Spinner renders correctly', () => {
  const tree = renderer
    .create(<Spinner />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
