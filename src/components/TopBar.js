import { useSelector } from "react-redux";
import CoinCardsContainer from "./CoinCardsContainer";
import { useState } from "react";

const TopBar = () => {
    
    const coins = useSelector((state) => state.coinReducer.coins);
    const gainers = coins.filter((coin) => coin.priceChangePercent > 5);
    const losers = coins.filter((coin) => coin.priceChangePercent < -10);
    gainers.sort((a,b) => (a.priceChangePercent > b.priceChangePercent) ? 1 : ((b.priceChangePercent > a.priceChangePercent) ? -1 : 0));
    losers.sort((a,b) => (a.priceChangePercent < b.priceChangePercent) ? 1 : -1)

    const [toShow, setToShow] = useState({toShow: coins});

    const handleClick = (selected) => {
        setToShow({toShow: selected})
    }

    return (
        <div>
            <button onClick = {() => handleClick(coins)}> All </button>
            <button onClick = {() => handleClick(gainers)}> Gainers </button>
            <button onClick = {() => handleClick(losers)}> Losers </button>
            <CoinCardsContainer coins = {toShow.toShow.length === 0 ? coins : toShow.toShow} />
        </div>
        
    )
}

export default TopBar
