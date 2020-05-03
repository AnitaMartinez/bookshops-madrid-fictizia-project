import React, { useEffect } from 'react';
import { ContainerMap } from './components'
import './App.css';

const getGeolocation = () => {
  const onSuccess = position => {
    console.log(position.coords.latitude, position.coords.longitude);
  }
  const onError = err => {
    console.log(err);
  }
  if('geolocation' in navigator) {
    console.log('active')
    // Aquí, si no lo tiene ya, pide permiso para pedir localización. Y cuando la tiene, la devuelve en unos segundos
    navigator.geolocation.watchPosition(onSuccess, onError);
  } else {
    console.log('not available')
  }
}

const App = () => {

  useEffect(getGeolocation, []);

  return (
    <div className="App">
      <p>hola</p>
      <ContainerMap/>
    </div>
  );
}

export default App;
