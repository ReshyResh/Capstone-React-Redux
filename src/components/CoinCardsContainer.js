import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import propTypes from 'prop-types';
import CoinCard from './CoinCard';

const CoinCardsContainer = (props) => {
  const { coins } = props;
  return (
    <div className="card-container">
      {coins.map((coin) => (
        <CoinCard coin={coin} key={uuidv4()} />
      ))}
    </div>
  );
};

CoinCardsContainer.defaultProps = {
  coins: {},
};

CoinCardsContainer.propTypes = {
  coins: propTypes.instanceOf(Object),
};

export default CoinCardsContainer;
