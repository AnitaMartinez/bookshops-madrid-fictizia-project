
const url = 'https://datos.madrid.es/egob/catalogo/206717-0-agenda-eventos-bibliotecas.json' // TODO: poner url en el .env

const getEvents = () => {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(response => response.json())
        .then(data => resolve(data['@graph']))
        .catch((err) => console.log(err))
    })
}

export {
    getEvents
}