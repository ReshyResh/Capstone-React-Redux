import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import propTypes from 'prop-types';
import images from '../images/images';

const CoinCard = (props) => {
  const { coin } = props;
  return (
    <Link to={`coin/${coin.symbol}`}>
      <div className={coin.priceChange > 0 ? 'coin-card green-bg' : 'coin-card red-bg'}>
        <div className="top-card">
          <h3 className="coin-card-title">
            {' '}
            {coin.symbol}
            <br />
            {coin.priceChangePercent > 0 ? (`+${coin.priceChangePercent}%`) : (`${coin.priceChangePercent}%`)}
          </h3>
        </div>
        <span className="arrow-details">
          <BsFillArrowRightCircleFill />
        </span>
        <img
          className="card-picture"
          src={images(coin.symbol)}
          alt={coin.symbol}
        />
      </div>
    </Link>
  );
};

CoinCard.defaultProps = {
  coin: {
    symbol: '',
    priceChange: '',
    priceChangePercent: '',
  },
};

CoinCard.propTypes = {
  coin: propTypes.instanceOf(Object),
};

export default CoinCard;
