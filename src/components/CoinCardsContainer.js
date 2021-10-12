import React from 'react'
import CoinCard from './CoinCard';
import { v4 as uuidv4 } from 'uuid';

const CoinCardsContainer = (props) => {
    const { coins } = props;
    return (
        <div className = "card-container">
            {coins.map ((coin) => (
                <CoinCard coin = { coin } key={uuidv4()} />
            ))}
        </div>
    )
}

export default CoinCardsContainer
