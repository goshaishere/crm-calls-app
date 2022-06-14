const SET_RATES = "SET_RATES";
const SET_CALLS = "SET_CALLS";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const SET_FETCH_ERROR = "SET_FETCH_ERROR";
const SET_EMP_LIST = "SET_EMP_LIST"

const defaultState = {
  response: [],
  totalRows: 0,
  results: [],
  isFetching: true,
  isFetchError: false,
  empList: [],
};

export default function responseReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_CALLS:
      return {
        ...state,
        isFetching: false,
        response: action.payload,
        totalRows: action.payload.total_rows,
        results: action.payload.results
      };

    case SET_EMP_LIST:
      return{
        ...state,
        empList: action.payload
      }
    case SET_RATES:
      return {
        ...state,
        isFetching: false,
      };
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };
    case SET_FETCH_ERROR:
      return {
        ...state,
        isFetchError: action.payload,
      };
    default:
      return state;
  }
}

export const setRates = (rates) => ({ type: SET_RATES, payload: rates });
export const setIsFetching = (bool) => ({
  type: SET_IS_FETCHING,
  payload: bool,
});
export const setFetchError = (bool) => ({
  type: SET_FETCH_ERROR,
  payload: bool,
});

export const setCalls = (calls) => ({ type: SET_CALLS, payload: calls });


export const setEmpList = (list) => ({ type: SET_EMP_LIST, payload: list });