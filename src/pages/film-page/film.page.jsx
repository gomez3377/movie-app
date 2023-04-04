import { useContext } from "react"
import { MovieContext } from "../../context/movie.context"
import { useParams } from "react-router-dom"


const FilmPage = ({}) => {
    const {movieData} = useContext(MovieContext)
    const {filmId} = useParams()
   const movie = movieData.find(film => film.id === parseInt(filmId))

    const {poster_path, title, overview} = movie

   if (!movie) {
    return <div>Movie not found</div>;
  }


  return (
    <div>
        <img src={`${imageBaseUrl}${poster_path}`} alt="" />
      <h2>{title}</h2>
      <p>{overview}</p>
    </div>
  )
}

export default FilmPage