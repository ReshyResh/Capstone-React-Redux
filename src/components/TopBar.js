import { useSelector } from "react-redux";
import CoinCardsContainer from "./CoinCardsContainer";
import { useState } from "react";
import { useEffect } from "react";
import Triangles from '../images/Triangles.js';

const TopBar = () => {
    const coins = useSelector((state) => state.coinReducer.coins);
    const gainers = coins.filter((coin) => coin.priceChangePercent > 0);
    const losers = coins.filter((coin) => coin.priceChangePercent < -1);
    gainers.sort((a,b) => (Number(a.priceChangePercent) > Number(b.priceChangePercent) ? -1 : 1));
    losers.sort((a,b) => (Number(a.priceChangePercent) < Number(b.priceChangePercent) ? -1 : 1));

    const [toShow, setToShow] = useState({toShow: coins});

    const handleClick = (selected) => {
        setToShow({toShow: selected})
    }
    useEffect(() => {
        const parent = document.getElementById('top-bar');
        parent.classList.remove('opacity-1');
        parent.classList.add(`opacity-0`);
        setTimeout(() => {
            parent.classList.replace(`opacity-0`,'opacity-1')
        }, 200);
      }, [toShow]);

    return (
        <div id = "top-bar">
            <div className="intro white">
                <h1> Hello, welcome to my app! </h1>
                <h3>Sort coins by:</h3>
                <div className="sort-container">
                    <button id="all-button" className="sort-button" onClick = {() => handleClick(coins)}> Show all </button>
                    <button id="gainers-button" className="sort-button" onClick = {() => handleClick(gainers)}> Top Gainers </button>
                    <button id="losers-button" className="sort-button" onClick = {() => handleClick(losers)}> Top Losers </button> 
                    <Triangles /> 
                </div>
            </div>
            <CoinCardsContainer coins = {toShow.toShow.length === 0 ? coins : toShow.toShow} />
        </div>
        
    )
}

export default TopBar
