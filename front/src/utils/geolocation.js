
export const getGeolocation = () => {
    return new Promise((resolve, reject) => {
      if('geolocation' in navigator) {
        navigator.geolocation.watchPosition(
          value => {
            resolve({
              latitude: value.coords.latitude,
              longitude: value.coords.longitude
            })
          },
          error => {
            console.log('> error', error)
            reject(error)
          },
          {timeout:4000}
        );
      } else {
        throw new Error('Geolocation not available')
      }
    })
  }