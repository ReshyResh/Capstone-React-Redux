import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import CoinCard from '../components/CoinCard';
import coin from './MockApiSingle';

it('Coin card renders correctly', () => {
  const tree = renderer
    .create(<Router><CoinCard coin={coin} /></Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
