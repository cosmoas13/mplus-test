import { createStore, combineReducers, applyMiddleware } from "redux";
import { logger, promise } from "../middleware/index";
import books from "../_reducer/books";
import type from "../_reducer/type";
import author from "../_reducer/author";

// Global state
const rootReducers = combineReducers({
  books,
  type,
  author
});

// Setup store for Redux
const store = createStore(rootReducers, applyMiddleware(logger, promise));

export default store;
