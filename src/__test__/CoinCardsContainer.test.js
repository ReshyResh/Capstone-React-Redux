import React from 'react';
import renderer from 'react-test-renderer';
import CoinCardsContainer from '../components/CoinCardsContainer'
import mock from './MockApiContainer';
import { BrowserRouter as Router } from "react-router-dom";

it('Coin cards container renders correctly', () => {
  const tree = renderer
    .create(<Router><CoinCardsContainer coins = { mock } /></Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});