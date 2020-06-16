export const getGeolocation = () => new Promise((resolve, reject) => {
  if ('geolocation' in navigator) {
    navigator.geolocation.watchPosition(
      (value) => {
        resolve({
          latitude: value.coords.latitude,
          longitude: value.coords.longitude,
        })
      },
      (error) => {
        reject(error)
      },
      { timeout: 5000 },
    )
  } else {
    throw new Error('Geolocation not available')
  }
})
