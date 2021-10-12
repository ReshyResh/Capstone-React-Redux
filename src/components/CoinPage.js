import { useSelector } from "react-redux";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import images from '../images/images'
import Graph from "./Graph";
import { Route, Switch, useRouteMatch } from "react-router";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import CoinStats from "./CoinStats";

const CoinPage = ({ match }) => {
    const coins = useSelector((state) => state.coinReducer.coins);
    const toShowBlob = coins.filter((coin) => coin.symbol === match.params.symbol);
    const toShow = toShowBlob[0];
    let { path, url } = useRouteMatch();
    return (
            <div>
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
            activeClassName="active-link" className="menu-item"
              to={`${url}`} exact>24HR STATS
            </NavLink>
            <NavLink
            activeClassName="active-link" className="menu-item"
              to={`${url}/graph`} exact>GRAPH
            </NavLink>
            </div>
                
                <Switch>
                    <Route exact path={path}>
                        <CoinStats coin = {toShow}/>
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
