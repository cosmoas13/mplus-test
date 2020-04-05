import { GET_AUTHOR } from "../config/constanst";

// Setup Reducer for Redux
const initialState = {
  data: [],
  loading: false,
  error: null
};

const author = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_AUTHOR}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_AUTHOR}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case `${GET_AUTHOR}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export default author;
