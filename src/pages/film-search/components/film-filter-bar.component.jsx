
import FilmSelector from './filter-selector.component'
import { filters } from '../js/filters'
import SearchInput from './search-input.component'
import {FaSearch} from 'react-icons/fa'
const FilmFilterBar = () => {
  return (
    <form>
        <h3>Browse By</h3>
        {filters.map((filter, index) => <FilmSelector key={index} filter={filter} />)}
      <SearchInput />
      <button><FaSearch/></button>
    </form>
  )
}

export default FilmFilterBar