import React, { useEffect, useState } from 'react';
import { ContainerMap, Input, Select } from './components'
import { getGeolocation } from './utils'
import { getEvents, getEventsByDistrict } from './api/events'
import './App.css';

const App = () => {

  const [events, setEvents] = useState([])
  const [userLocation, setUserLocation] = useState({})

  useEffect(() => { // TODO: manage errors --> catch
    getGeolocation().then(value => {
      setUserLocation(value)
    })
    getEvents().then(data => setEvents(data))
  }, []);

  const handleSearch = district => {
    getEventsByDistrict(district).then(data => setEvents(data))
  }

  return (
    <div className="App">
      <h1>Eventos en las bibliotecas de Madrid</h1>
      <Select onSearch={handleSearch}/>
      <ContainerMap
        events={events}
        userLocation={userLocation}
      />
    </div>
  );
}

export default App;
