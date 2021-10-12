const FETCH_LOADING = 'FETCH_LOADING';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const ADD_ROCKET = 'ADD_ROCKET';

const initialState = {
    loading: true,
    coins: []
};

export const addRocket = (payload) => ({
    type: ADD_ROCKET,
    payload,
});

export const fetchPostsLoading = () => ({
    type: FETCH_LOADING,
});

export const fetchPostsSuccess = (payload) => ({
    type: FETCH_SUCCESS,
    payload,
  });

export const fetchPostsRequest = () => async (dispatch) => {
    dispatch(fetchPostsLoading());
    const request = await fetch('https://api.binance.com/api/v1/ticker/24hr');
    const result = await request.json();
    const filtered = result.filter((coin) => coin.symbol.includes('USDT'));
    const truncated = filtered.slice(0, 30);
    dispatch(
      fetchPostsSuccess(truncated),
    );
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_LOADING:
      return {
        coins: [...state.coins],
        loading: true,
      };

      case FETCH_SUCCESS:
          return {
            loading: false,
            coins: action.payload
          }
      default:
      return state;
    }
      
};

export default reducer;

