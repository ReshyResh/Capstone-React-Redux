import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';
import store from '../redux/store';
import { Provider } from 'react-redux';
import mock from './MockApiContainer';
import { BrowserRouter as Router } from "react-router-dom";
import CoinCardsContainer from '../components/CoinCardsContainer'

describe('Components rendering correctly', () => {
    it('Homepage rendering', () => {
      render(<Provider store = { store }><App /></Provider>);
      expect(screen.getByText('Hello, welcome to yet another cryptocurrency tracker!'));
    });

    it('Card text rendering correctly', () => {
      render(<Router><CoinCardsContainer coins = { mock } /></Router>);
      expect(screen.getByAltText("ETHBTC"));
    });

})