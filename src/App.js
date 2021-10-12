import { fetchPostsRequest } from './redux/reducer/dataReducer';
import './css/index.css';
import './css/detailsPage.css'
import TopBar from './components/TopBar';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CoinCardsContainer from './components/CoinCardsContainer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CoinPage from './components/CoinPage';
import NotFound from './components/NotFound';
import Spinner from './components/Spinner'

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, [dispatch]);
  const coins = useSelector((state) => state.coinReducer.coins);
  const loading = useSelector((state) => state.coinReducer.loading);
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/coin/:symbol" exactly component={CoinPage} />
          <Route exact path="/">
            {loading ? <Spinner /> : null}
            <TopBar />
          </Route>
          <Route component={NotFound} />
      </Switch>
    </ BrowserRouter>
      
  );
}

export default App;
