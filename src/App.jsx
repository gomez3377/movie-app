import {Route, Routes} from 'react-router-dom'

import Navigation from "./pages/navigation/navigation.page"
import Home from './pages/home/home.page'
import FilmSearch from './pages/film-search/film-search.page'
import Results from './pages/results/results.page'

function App() {
 

  return (
    <div className="App">
      <Routes>
    <Route path='/' element={<Navigation/>} >
    <Route index element={<Home/>} />
    <Route path='film-search' element={<FilmSearch/>}  />
    <Route path='results' element={<Results/>} />
    </Route>
      </Routes>

    </div>
  )
}

export default App
