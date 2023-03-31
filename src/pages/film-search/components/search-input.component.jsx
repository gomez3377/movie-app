import React from 'react'

const SearchInput = ({handleChange, formData}) => {
  const {searchInput} = formData

  return (
    <div>
        <label htmlFor="">Find A Film</label>
        <input type="search" name="searchInput" id="searchInput" value={searchInput} onChange={handleChange}/>
    </div>
  )
}

export default SearchInput