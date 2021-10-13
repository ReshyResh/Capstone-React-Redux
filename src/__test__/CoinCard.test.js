import React from 'react';
import renderer from 'react-test-renderer';
import CoinCard from '../components/CoinCard';
import coin from './MockApiSingle'
import { BrowserRouter as Router } from "react-router-dom";

it('Coin card renders correctly', () => {
  const tree = renderer
    .create(<Router><CoinCard coin = { coin } /></Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});