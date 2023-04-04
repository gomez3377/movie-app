import React, { useContext } from 'react'
import { MovieContext } from '../../context/movie.context'
import MovieResultCard from './components/movie-result-card.component'

const Results = () => {
    const {movieData} = useContext(MovieContext)
    const {results} = movieData
  return (
    <div>
      <h1>Search Results</h1>
      {results.map(movie => (
        <MovieResultCard key={movie.id} movie={movie} />
         
        
      ))}
    </div>
  )
}

export default Results