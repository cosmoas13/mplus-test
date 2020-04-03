import {
  GET_BOOKS,
  POST_BOOK,
  UPDATE_BOOK,
  DELETE_BOOK
} from "../config/constanst";

// Setup Reducer for Redux
const initialState = {
  data: [],
  loading: false,
  error: null
};

const books = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_BOOKS}_PENDING`:
    case `${POST_BOOK}_PENDING`:
    case `${UPDATE_BOOK}_PENDING`:
    case `${DELETE_BOOK}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_BOOKS}_FULFILLED`:
    case `${POST_BOOK}_FULFILLED`:
    case `${UPDATE_BOOK}_FULFILLED`:
    case `${DELETE_BOOK}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case `${GET_BOOKS}_REJECTED`:
    case `${POST_BOOK}_REJECTED`:
    case `${UPDATE_BOOK}_REJECTED`:
    case `${DELETE_BOOK}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export default books;
