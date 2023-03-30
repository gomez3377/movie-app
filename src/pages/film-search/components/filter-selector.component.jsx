import React from 'react'

const FilmSelector = ({filter}) => {
    const {name, options} =filter
  return (
    <select name={name} id=''>
        <option value="">{name}</option>
        {options.map((option, index) => <option key={index} value={option}>{option}</option>)}

    </select>
  )
}

export default FilmSelector