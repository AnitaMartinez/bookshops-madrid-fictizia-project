import React, { useEffect, useState } from 'react';
import { ContainerMap, Select } from './components'
import { getGeolocation } from './utils'
import { getEvents, getEventsByDistrict } from './api/events'
import './App.scss';

const App = () => {

  const [events, setEvents] = useState([])
  const [userLocation, setUserLocation] = useState({})
  const [errorUserLocation, setErrorUserLocation] = useState(false)
  const [hasDeniedLocation, setHasDeniedLocation] = useState(false)
  const [isSearchByDistrict, setCloserZoom] = useState(false)
  const [loadingSelect, setLoadingSelect] = useState(false)
  const [error, setError] = useState(null)
  
  const setAllEvents = async () => {
    try {
      setCloserZoom(false)
      const data = await getEvents()
      setEvents(data)
      if ( data.length === 0 ) setError('No hay eventos')
    } catch(error) {
      console.error(error)
    }
  }

  const setGeolocation = async () => {
    try {
      setError(null)
      const value = await getGeolocation()
      setUserLocation(value)
    } catch (error) {
      if(error.code === 1 && error.message === 'User denied Geolocation'){
        setHasDeniedLocation(true)
      } else {
        setErrorUserLocation(true)
        console.error(error)
      }
    }
  } 

  const setEventsByDistrict = async (district) => {
    setCloserZoom(true)
    try {
      const data = await getEventsByDistrict(district)
      setEvents(data)
      if ( data.length === 0 ) setError('No hay eventos')
    } catch(error) {
      console.error(error)
    }
  }

  useEffect(() => {
    const init = async() => {
      setLoadingSelect(true)
      await setGeolocation()
      await setAllEvents()
      setLoadingSelect(false)
    } 
    init()
  }, []);

  const handleSearch = async district => {
    setLoadingSelect(true)
    setError(null)
    if(!district) {
      await setAllEvents()
      setLoadingSelect(false)
    } else {
      await setEventsByDistrict(district)
      setLoadingSelect(false)
    }
  }

  return (
    <div className="App">
      <div className="header">
        <h1 className="main-title">Eventos en las bibliotecas de Madrid</h1>
      </div>
      <Select onSearch={handleSearch} loading={loadingSelect}/>
      {error && <p>{error}</p>}
      <ContainerMap
        events={events}
        userLocation={userLocation}
        hasDeniedLocation={hasDeniedLocation}
        isSearchByDistrict={isSearchByDistrict}
        errorUserLocation={errorUserLocation}
      />
    </div>
  );
}

export default App;
