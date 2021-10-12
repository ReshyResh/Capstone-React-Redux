import React from 'react'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const CoinStats = (props) => {
    const { coin, index } = props;
    const coins = useSelector((state) => state.coinReducer.coins);
    return (
        <>
          <ul className="stats-list">
            <li>
            <span className="coin-details-title">Price Change:</span>
            <span
                className={
                coin.priceChange > 0
                    ? "coin-details-value green"
                    : "coin-details-value red"
                }
            >
                {coin.priceChange > 0
                ? "+" + Number(coin.priceChange)
                : Number(coin.priceChange)}{"$"}
            </span>
            </li>
            <li>
            <span className="coin-details-title">Price Change %:</span>
            <span
                className={
                coin.priceChangePercent > 0
                    ? "coin-details-value green"
                    : "coin-details-value red"
                }
            >
                {coin.priceChangePercent > 0
                ? "+" + Number(coin.priceChangePercent) + "%"
                : Number(coin.priceChangePercent) + "%"}
            </span>
            </li>
            <li>
            <span className="coin-details-title">Highest price:</span>
            <span className="coin-details-value">{Number(coin.highPrice)}$</span>
            </li>
            <li>
            <span className="coin-details-title">Lowest price:</span>
            <span className="coin-details-value">{Number(coin.lowPrice)}$</span>
            </li>
            <li>
            <span className="coin-details-title">Previous close:</span>
            <span className="coin-details-value">
                {Number(coin.prevClosePrice)}$
            </span>
            </li>
            <li>
            <span className="coin-details-title">Volume:</span>
            <span className="coin-details-value">{Number(coin.volume)}</span>
            </li>
        </ul>
        {/* <Link to={`/coin/${coins[index+1].symbol}`}><span className="arrow-left">NEXT COIN</span></Link> */}
      </>
      
    );
}

export default CoinStats
