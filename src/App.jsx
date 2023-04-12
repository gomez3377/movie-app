import { useEffect } from 'react'
import {Route, Routes} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Navigation from "./pages/navigation/navigation.page"
import Home from './pages/home/home.page'
import FilmSearch from './pages/film-search/film-search.page'
import Results from './pages/results/results.page'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const searchMovie = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&query=${query}`);
        const data = await response.json();
        setMovieData(data);
        console.log(movieData)
      } catch (error) {
        console.error(error);
      }
    };

    if (query) {
      searchMovie();
    }
  }, [query]);

  return (
    <div className="App">
      <Routes>
    <Route path='/' element={<Navigation/>} >
    <Route index element={<Home/>} />
    <Route path='film-search' element={<FilmSearch/>}  />
    <Route path='results' element={<Results/>} />
    <Route path='film/:film-id' element={<FilmSearch/>} />
    </Route>
      </Routes>

    </div>
  )
}

export default App
