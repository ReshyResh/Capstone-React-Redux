import React from 'react'
import CoinCard from './CoinCard';

const CoinCardsContainer = (props) => {
    const { coins } = props;
    return (
        <div className = "card-container">
            {coins.map ((coin) => (
                <CoinCard coin = { coin }/>
            ))}
        </div>
    )
}

export default CoinCardsContainer
