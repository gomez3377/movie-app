import { MOVIE_APP_ACTION_TYPES } from "./movie.types";
import { createAction } from "../../utils/reducer.utils";


export const setMovieData = (query) => createAction(MOVIE_APP_ACTION_TYPES.SET_MOVIE_DATA, query)