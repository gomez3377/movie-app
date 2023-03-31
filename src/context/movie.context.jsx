import { createContext, useEffect, useState } from "react";

const APIKey = "f7f1e9c40226d0f34c6c09f059004634";
const url = `https://api.themoviedb.org/3/movie/550?api_key=${APIKey}`;

export const MovieContext = createContext({
  movieData: {},
  input:'',
  setInput:() => {},
});

export const MovieProvider = ({ children }) => {
  const [movieData, setMovieData] = useState({});
  const [input, setInput] = useState('')

//   useEffect(() => {
//     fetch(url)
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         }
//         throw new Error("Network response was not ok");
//       })
//       .then((movie_data) => {
//         setMovieData(movie_data);
//       })
//       .catch((error) => {
//         console.error("There was a problem fetching data", error);
//       });
//   }, []);

  
  const value = {
    movieData,
    input,
    setInput,
  };
  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
