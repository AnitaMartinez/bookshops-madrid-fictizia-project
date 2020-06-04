
const url = 'http://localhost:5000/catalogue'

const getEvents = (params) => {
    const path = params ? `${url}?${params}` : url

    return new Promise((resolve, reject) => {
        fetch(path)
        .then(response => response.json())
        .then(data => {
            resolve(data)
        } )
        .catch((err) => console.log(err))
    })
}

export {
    getEvents,
}