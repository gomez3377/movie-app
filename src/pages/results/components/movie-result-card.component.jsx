import React, { useContext } from "react";
import { MovieContext } from "../../../context/movie.context";
import { useNavigate } from "react-router-dom";

const MovieResultCard = ({ movie }) => {
    const {setCurrentMovieSelected} = useContext(MovieContext)
    const navigate = useNavigate()
  const { overview, title, poster_path, id } = movie;
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500'

  const navigateToMoviePage = () => {
    setCurrentMovieSelected(movie)
    navigate(`/film/${id}`)
  }
  
  return (
    <div onClick = {navigateToMoviePage}>
        <img src={`${imageBaseUrl}${poster_path}`} alt="" />
      <h2>{title}</h2>
      <p>{overview}</p>
    </div>
  );
};

export default MovieResultCard;
