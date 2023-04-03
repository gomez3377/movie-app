import React, { useContext } from 'react'
import { MovieContext } from '../../context/movie.context'

const Results = () => {
    const {movieData} = useContext(MovieContext)
  return (
    <div>
      <h1>Search Results</h1>
      {movieData.map(movie => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
        </div>
      ))}
    </div>
  )
}

export default Results