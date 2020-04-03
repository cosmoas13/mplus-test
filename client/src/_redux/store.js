import { createStore, combineReducers, applyMiddleware } from "redux";
import { logger, promise } from "../middleware/index";
import books from "../_reducer/books";

// Global state
const rootReducers = combineReducers({
  books
});

// Setup store for Redux
const store = createStore(rootReducers, applyMiddleware(logger, promise));

export default store;
