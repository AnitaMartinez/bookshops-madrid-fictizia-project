import React, { useState }  from 'react'
import PropTypes from 'prop-types'
import { districts } from '../../utils'

const options = Object.keys(districts).map(key =>
    <option value={key} key={key} >{districts[key]}</option>
)


const Select = ({ onSearch }) => {

    const [district, setDistrict] = useState('')

    const handleChange = event => {
        setDistrict(event.target.value)
    }

    const handleSearch = () => {
        onSearch(district)
    }

    return (
        <>
            <select value={district} onChange={handleChange}>
                { options }
            </select>
            <button onClick={handleSearch}>Buscar</button>
        </>
      )
}

Select.propTypes = {
    onSearch: PropTypes.func.isRequired
}

export default Select;
