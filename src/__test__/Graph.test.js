import React from 'react';
import renderer from 'react-test-renderer';
import Graph from '../components/Graph';
import store from '../redux/store';
import { Provider } from 'react-redux';
import coin from './MockApiSingle';

it('Graph renders correctly', () => {
  const tree = renderer
    .create(<Provider store = { store }> <Graph coin = { coin } /> </Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});