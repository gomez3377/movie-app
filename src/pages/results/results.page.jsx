import { useContext, useState, useEffect } from 'react'
import { MovieContext } from '../../context/movie.context'
import MovieResultCard from './components/movie-result-card.component'

const Results = () => {
    const {movieData} = useContext(MovieContext)
    const [isLoading, setIsLoading] = useState(true);
  

    
  
    useEffect(() => {
      if (movieData) {
        setIsLoading(false);
      }
    }, [movieData]);
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    if (!movieData) {
      return null; // If movieData is null or undefined, return null to render nothing
    }

   

  return (
    <div>
      <h1>Search Results</h1>
      {movieData.results.map(movie => (
        <MovieResultCard key={movie.id} movie={movie} />
         
        
      ))}
    </div>
  )
}

export default Results