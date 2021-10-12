import React from 'react'
import images from '../images/images'
import { Link } from 'react-router-dom'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

const CoinCard = (props) => {
    const { coin } = props
    return (
      <Link to={"coin/" + coin.symbol}>
        <div className={coin.priceChange > 0 ? 'coin-card green-bg' : 'coin-card red-bg'}>
          <div className="top-card">
            <h3 className="coin-card-title"> {coin.symbol}<br></br>{coin.priceChangePercent > 0 ? ('+'+coin.priceChangePercent+'%') : (coin.priceChangePercent+'%')} </h3>
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
}

export default CoinCard
