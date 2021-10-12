import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import coinReducer from './reducer/dataReducer';

const reducer = combineReducers({
  coinReducer,
});
const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;