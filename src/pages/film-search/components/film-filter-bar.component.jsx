import { useContext, useState } from 'react'

import { filters } from '../js/filters'
import FilmSelector from './filter-selector.component'
import SearchInput from './search-input.component'
import {FaSearch} from 'react-icons/fa'
import { MovieContext } from '../../../context/movie.context'


const defaultFormData ={
  searchInput:""
}
const FilmFilterBar = () => {
const {} = useContext(MovieContext)
  const [formData, setFormData] = useState(defaultFormData)


  const handleChange = (event) => {
    const {name, value} = event.target
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }))
  }
 const handleSumbit = () => {
  
 }
  return (
    <form>
        <h3>Browse By</h3>
        {filters.map((filter, index) => <FilmSelector key={index} filter={filter} />)}
      <SearchInput handleChange={handleChange} formData={formData} />
      <button><FaSearch/></button>
    </form>
  )
}

export default FilmFilterBar