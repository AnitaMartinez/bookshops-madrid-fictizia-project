import React from 'react'
import SpinnerSVG from '../../assets/spinner.svg'
import './Spinner.scss'

const Spinner = () => (
  <div className="Spinner">
    <img src={SpinnerSVG} alt="spinner" className="content" />
  </div>
)

export default Spinner
