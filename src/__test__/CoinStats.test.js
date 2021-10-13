import React from 'react';
import renderer from 'react-test-renderer';
import CoinStats from '../components/CoinStats'
import coin from './MockApiSingle';

it('Coin stats render correctly', () => {
  const tree = renderer
    .create(<CoinStats coin = { coin } />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});