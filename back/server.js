const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios')
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/catalogue', function (req, res) {
    axios.get(`https://datos.madrid.es/egob/catalogo/206717-0-agenda-eventos-bibliotecas.json`)
        .then(response => {
            res.json(response.data['@graph'])
        })
        .catch(err => res.send(err))
})


app.listen(port, () => console.log(`Listening on port ${port}`))