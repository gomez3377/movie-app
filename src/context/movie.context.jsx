import { createContext, useEffect, useState } from "react";

const APIKey = "f7f1e9c40226d0f34c6c09f059004634";


export const MovieContext = createContext({
  currentMovieSelected: null,
  movieData: null,
  query:'',
  setQuery:() => {},
  setCurrentMovieSelected:() => {}
});

export const MovieProvider = ({ children }) => {
  const [movieData, setMovieData] = useState(null);
  const [query, setQuery] = useState('')
const [currentMovieSelected, setCurrentMovieSelected] = useState(null)





 


  
  
  const value = {
    currentMovieSelected,
    setCurrentMovieSelected,
    movieData,
    query,
    setQuery,
  };
  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
