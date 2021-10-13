import { useSelector } from "react-redux";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import images from '../images/images'
import Graph from "./Graph";
import { Route, Switch, useRouteMatch } from "react-router";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import CoinStats from "./CoinStats";
import { useEffect } from "react";

const CoinPage = ({ match }) => {
    const coins = useSelector((state) => state.coinReducer.coins);
    console.log(coins);
    const toShowBlob = coins.filter((coin) => coin.symbol === match.params.symbol);
    const index = coins.indexOf(toShowBlob[0])
    const toShow = toShowBlob[0];
    let { path, url } = useRouteMatch();
    useEffect(() => {
        const parent = document.getElementById('main-page');
        parent.classList.add('invisible');
        setTimeout(() => {
            parent.classList.replace('invisible','visible')
        }, 100);
      }, []);
    const clickAnim = (side) => {
        const parent = document.getElementById('main-page');
        parent.classList.remove('back-to-middle');
        parent.classList.add(`to-the-${side}`);
        setTimeout(() => {
            document.getElementById('stats-button').focus();
            document.getElementById('stats-button').click();
        }, 100);
        setTimeout(() => {
            parent.classList.replace(`to-the-${side}`,'back-to-middle')
        }, 200);
      };
    return (
            <div id="main-page">
                <div className="bottom-page">
                    {index > 0 ? (<Link to={`/coin/${coins[index-1].symbol}`}><span onClick={() => clickAnim('left')} className="button-next-prev">PREV COIN</span></Link>) : null }
                    {index < coins.length-1 ? (<Link to={`/coin/${coins[index+1].symbol}`}><span onClick={() => clickAnim('right')} className="button-next-prev">NEXT COIN</span></Link>) : null }
                </div>
                
            <div className = "top-bar-details">
                <Link to='/'><span className="arrow-left"><FaChevronLeft /></span></Link>
                <h3 className="details-title white">{toShow.symbol}</h3>
            </div>
            <hr className="separator"></hr>
            <Router>
            <div className = "details-top">
            <img className = "image-details align-vertically" src = {images(toShow.symbol)} alt = {toShow.symbol} />
            <h2 className="align-vertically white">
                Current price: {Number(toShow.lastPrice)}
            </h2>
            </div>
            <div className="stats-graph">
            <NavLink
            activeClassName="active-link" className="menu-item" id="stats-button"
              to={`${url}`} exact>24HR STATS
            </NavLink>
            <NavLink
            activeClassName="active-link" className="menu-item"
              to={`${url}/graph`} exact>GRAPH
            </NavLink>
            </div>
                
                <Switch>
                    <Route exact path={path}>
                        <CoinStats coin = {toShow} index= {index}/>
                        
                    </Route>
                    <Route exact path={`${path}/graph`}>
                        <Graph coin = {toShow}/>
                    </Route>
                </Switch>
                </Router>
            </div>
    )
}

export default CoinPage
