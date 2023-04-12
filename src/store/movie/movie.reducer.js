import { MOVIE_APP_ACTION_TYPES } from "./movie.types";


const initialState = {
    currentMovieSelected: null,
    movieData: null,
    query: '',
  };
  
  export const movieReducer = (state = initialState, action) => {
      const {type, payload} = action
    switch (type) {
      case MOVIE_APP_ACTION_TYPES.SET_MOVIE_DATA:
        return { ...state, movieData: payload };
      case MOVIE_APP_ACTION_TYPES.SET_QUERY:
        return { ...state, query: payload };
      case MOVIE_APP_ACTION_TYPES.SET_CURRENT_MOVIE_SELECTED:
        return { ...state, currentMovieSelected: payload };
      default:
        return state;
    }
  };
  