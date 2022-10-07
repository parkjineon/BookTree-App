import { combineReducers } from "redux";
import user from "./user_reducer";
import book from "./book_reducer";
import movie from "./movie_reducer";

const rootReducer = combineReducers({
  user,
  book,
  movie
});

export default rootReducer;