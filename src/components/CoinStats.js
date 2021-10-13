import React from 'react';
import propTypes from 'prop-types';

const CoinStats = (props) => {
  const { coin } = props;
  return (
    <>
      <ul className="stats-list">
        <li>
          <span className="coin-details-title">Price Change:</span>
          <span
            className={
                coin.priceChange > 0
                  ? 'coin-details-value green'
                  : 'coin-details-value red'
                }
          >
            {coin.priceChange > 0
              ? `+${Number(coin.priceChange)}`
              : Number(coin.priceChange)}
            $
          </span>
        </li>
        <li>
          <span className="coin-details-title">Price Change %:</span>
          <span
            className={
                coin.priceChangePercent > 0
                  ? 'coin-details-value green'
                  : 'coin-details-value red'
                }
          >
            {coin.priceChangePercent > 0
              ? `+${Number(coin.priceChangePercent)}%`
              : `${Number(coin.priceChangePercent)}%`}
          </span>
        </li>
        <li>
          <span className="coin-details-title">Highest price:</span>
          <span className="coin-details-value">
            {Number(coin.highPrice)}
            $
          </span>
        </li>
        <li>
          <span className="coin-details-title">Lowest price:</span>
          <span className="coin-details-value">
            {Number(coin.lowPrice)}
            $
          </span>
        </li>
        <li>
          <span className="coin-details-title">Volume:</span>
          <span className="coin-details-value">{Number(coin.volume)}</span>
        </li>
      </ul>
    </>

  );
};

CoinStats.defaultProps = {
  coin: {
    priceChange: '',
    priceChangePercent: '',
    highPrice: '',
    lowPrice: '',
    volume: '',
  },
};

CoinStats.propTypes = {
  coin: propTypes.instanceOf(Object),
};

export default CoinStats;
