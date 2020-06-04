import React, { useState }  from 'react'
import PropTypes from 'prop-types'


const Input = ({ onSubmit }) => {
  const [value, setValue] = useState('')

  const handleChange = event => {
      setValue(event.target.value)
  }

  const handleClick = () => {
      onSubmit(value)
      setValue('')
  }

  return (
    <>
        <input
            type="text"
            value={value}
            onChange={handleChange}
            placeholder='Calle...'
        />
        <button onClick={handleClick}>Buscar</button>
    </>
  )
}

Input.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default Input;
