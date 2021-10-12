import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import coinReducer from './reducer/dataReducer';
import graphReducer from './reducer/graphReducer'

const reducer = combineReducers({
  coinReducer,
  graphReducer
});
const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;