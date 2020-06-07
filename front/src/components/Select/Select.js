import React, { useState }  from 'react'
import PropTypes from 'prop-types'
import { districts } from '../../utils'

const options = Object.keys(districts).map(key =>
    <option value={key} key={key} >{districts[key]}</option>
)

const Select = ({ onSearch }) => {

    const [district, setDistrict] = useState('')

    const handleChange = event => {
        const district = event.target.value
        setDistrict(district)
        onSearch(district)
    }

    // const handleSearch = () => {
    //     onSearch(district)
    // }

    return (
        <>
            <label for="district">Busca por distrito: </label>
            <select id="district" value={district} onChange={handleChange}>
                <option value={""}></option>
                { options }
            </select>
            {/* <button onClick={handleSearch}>Buscar por distrito</button> */}
        </>
      )
}

Select.propTypes = {
    onSearch: PropTypes.func.isRequired
}

export default Select;
