import { useContext, useState } from 'react'

import { filters } from '../js/filters'
import { useHistory } from 'react-router-dom';

import FilmSelector from './filter-selector.component'
import SearchInput from './search-input.component'
import {FaSearch} from 'react-icons/fa'
import { MovieContext } from '../../../context/movie.context'


const defaultFormData ={
  searchInput:""
}
const FilmFilterBar = () => {
const {setQuery} = useContext(MovieContext)
  const [formData, setFormData] = useState(defaultFormData)
const history = useHistory()


  const handleChange = (event) => {
    const {name, value} = event.target
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }))
  }

 const handleSumbit = (event) => {
   event.preventDefault()
  setQuery(formData.searchInput)
  history.push({
    pathname: "/results",
    state: { searchResults: movieData },
  });
 resetFormData()

 }

const resetFormData = () => {
  setFormData(defaultFormData)
}

  return (
    <form onSubmit={handleSumbit}>
        <h3>Browse By</h3>
        {filters.map((filter, index) => <FilmSelector key={index} filter={filter} />)}
      <SearchInput handleChange={handleChange} formData={formData} />
      <button type='sumbit'><FaSearch/></button>
    </form>
  )
}

export default FilmFilterBar