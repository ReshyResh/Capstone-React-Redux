import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import App from '../App';
import store from '../redux/store';
import mock from './MockApiContainer';
import CoinCardsContainer from '../components/CoinCardsContainer';

describe('Components rendering correctly', () => {
  it('Homepage rendering', () => {
    render(<Provider store={store}><App /></Provider>);
    expect(screen.getByText('Hello, welcome to my cryptocurrency tracker!'));
  });

  it('Card text rendering correctly', () => {
    render(<Router><CoinCardsContainer coins={mock} /></Router>);
    expect(screen.getByAltText('ETHBTC'));
  });
});
