import React, { useEffect, useState } from 'react';
import { ContainerMap, Input, Select } from './components'
import { getGeolocation } from './utils'
import { getEvents, getEventsByDistrict } from './api/events'
import './App.css';

const App = () => {

  const [events, setEvents] = useState([])
  const [userLocation, setUserLocation] = useState({})
  const [hasDeniedLocation, setHasDeniedLocation] = useState(false)


  useEffect(() => { // TODO: manage errors --> catch
    getGeolocation().then(value => {
      setUserLocation(value)
    })
    .catch(error => {
      if(error.code === 1 && error.message === 'User denied Geolocation'){
        setHasDeniedLocation(true)
      } else {
        console.log(error)
      }
    })
    getEvents().then(data => setEvents(data))
  }, []);

  const handleSearch = district => {
    if(!district) {
      getEvents().then(data => setEvents(data))
    } else {
      getEventsByDistrict(district).then(data => setEvents(data))
    }
  }

  return (
    <div className="App">
      <h1>Eventos en las bibliotecas de Madrid</h1>
      <Select onSearch={handleSearch}/>
      <ContainerMap
        events={events}
        userLocation={userLocation}
        hasDeniedLocation={hasDeniedLocation}
      />
    </div>
  );
}

export default App;
