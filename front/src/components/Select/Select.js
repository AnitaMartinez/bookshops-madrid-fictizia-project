import React, { useState }  from 'react'
import PropTypes from 'prop-types'
import { districts } from '../../utils'
import ArrowDown from '../../assets/down-arrow.svg'
import SpinnerSVGBlack from "../../assets/black-spinner.svg";
import './Select.scss';

const options = Object.keys(districts).map(key =>
    <option value={key} key={key} >{districts[key]}</option>
)

const Select = ({ onSearch, loading }) => {

    const [district, setDistrict] = useState('')

    const handleChange = event => {
        const district = event.target.value
        setDistrict(district)
        onSearch(district)
    }

    return (
        <div className="ContainerSelect">
            {!loading && <img src={ArrowDown} alt="flecha abajo" className="icon-select"/>}  
            {loading && <img src={SpinnerSVGBlack} alt="spinner" className="icon-select"/>}  
            <select className="select" id="district" value={district} onChange={handleChange}>
                <option value={""}>Busca por distrito</option>
                { options }
            </select>
        </div>
      )
}

Select.propTypes = {
    onSearch: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
}

export default Select;
