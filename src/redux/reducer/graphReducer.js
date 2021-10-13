const GRAPH_LOADING = 'GRAPH_LOADING';
const GRAPH_SUCCESS = 'GRAPH_SUCCESS';

const initialState = {
  loading: true,
  stats: [],
};

export const fetchGraphLoading = () => ({
  type: GRAPH_LOADING,
});

export const fetchGraphSuccess = (payload) => ({
  type: GRAPH_SUCCESS,
  payload,
});

export const fetchGraph = (symbol) => async (dispatch) => {
  dispatch(fetchGraphLoading());
  const request = await fetch(`https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=1m`);
  const result = await request.json();
  result.slice(460, 40);
  const arr = [];
  result.forEach((element) => {
    arr.push(element[4]);
  });
  dispatch(
    fetchGraphSuccess(arr),
  );
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GRAPH_LOADING:
      return {
        stats: [...state.stats],
        loading: true,
      };

    case GRAPH_SUCCESS:
      return {
        loading: false,
        stats: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
