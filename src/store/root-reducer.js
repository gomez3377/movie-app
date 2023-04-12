import { combineReducers } from "redux";
import { movieReducer } from "./movie/movie.reducer";

export const RootReducer = combineReducers({
    movie: movieReducer,
})