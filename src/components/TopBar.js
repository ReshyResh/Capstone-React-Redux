import { useSelector } from "react-redux";
import CoinCardsContainer from "./CoinCardsContainer";
import { useState } from "react";
import { useEffect } from "react";

const TopBar = () => {
    useEffect(() => {
        const parent = document.getElementById('top-bar');
        parent.classList.replace('invisible','visible');
      }, []);

    const coins = useSelector((state) => state.coinReducer.coins);
    const gainers = coins.filter((coin) => coin.priceChangePercent > 0);
    const losers = coins.filter((coin) => coin.priceChangePercent < -1);
    gainers.sort((a,b) => (Number(a.priceChangePercent) > Number(b.priceChangePercent) ? 1 : -1));
    losers.sort((a,b) => (Number(a.priceChangePercent) < Number(b.priceChangePercent) ? -1 : 1));

    const [toShow, setToShow] = useState({toShow: coins});

    const handleClick = (selected) => {
        setToShow({toShow: selected})
    }

    return (
        <div id = "top-bar" className="invisible">
            <button onClick = {() => handleClick(coins)}> All </button>
            <button onClick = {() => handleClick(gainers)}> Gainers </button>
            <button onClick = {() => handleClick(losers)}> Losers </button>
            <CoinCardsContainer coins = {toShow.toShow.length === 0 ? coins : toShow.toShow} />
        </div>
        
    )
}

export default TopBar
