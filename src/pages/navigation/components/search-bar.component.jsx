import React from 'react'

const SearchBar = () => {
  return (
    <form>
        <select name="" id="">
          <option value="all">All</option>
          <option value="movies">Movies</option>
          <option value="actor">Actors</option>
          <option value="genre">Genre</option>
        </select>
        <input type="search" name="" id="" />
        <button>search</button>
      </form>
  )
}

export default SearchBar