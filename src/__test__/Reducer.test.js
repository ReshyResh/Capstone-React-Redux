import coinReducer, { fetchPostsSuccess, fetchPostsLoading } from '../redux/reducer/dataReducer';
import graphReducer from '../redux/reducer/graphReducer';
import mock from './MockApiSingle';

describe('Reducers working correctly', () => {
  test('Coin reducer should return initial state', () => {
    expect(coinReducer(undefined, {})).toEqual(
      {
        loading: true,
        coins: [],
      },
    );
  });

  test('Graph reducer should return initial state', () => {
    expect(graphReducer(undefined, {})).toEqual(
      {
        loading: true,
        stats: [],
      },
    );
  });

  test('Coin reducer should add payload to coins', () => {
    const previousState = {};
    expect(coinReducer(previousState, fetchPostsSuccess(mock))).toEqual(
      {
        coins: {
          symbol: 'BTCUSDT',
          priceChange: '0.00223200',
          priceChangePercent: '3.677',
          weightedAvgPrice: '0.06174914',
          prevClosePrice: '0.06070000',
          lastPrice: '0.06293200',
          lastQty: '11.23320000',
          bidPrice: '0.06291600',
          bidQty: '0.94880000',
          askPrice: '0.06292100',
          askQty: '0.15380000',
          openPrice: '0.06070000',
          highPrice: '0.06340800',
          lowPrice: '0.05992700',
          volume: '111634.61100000',
          quoteVolume: '6893.34080023',
          openTime: 1634025860441,
          closeTime: 1634112260441,
          firstId: 301610756,
          lastId: 301836121,
          count: 225366,
        },
        loading: false,
      },
    );
  });

  test('Coin reducer should have a method for turning loading to true', () => {
    const previousState = {
      coins: [
        {
          symbol: 'BTCUSDT',
        }],
      loading: false,
    };
    expect(coinReducer(previousState, fetchPostsLoading())).toEqual({
      coins: [{
        symbol: 'BTCUSDT',
      }],
      loading: true,
    });
  });
});
