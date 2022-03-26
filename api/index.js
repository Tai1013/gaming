import axios from 'axios'
const AXIOS_BASE_URL = process.env._AXIOS_BASE_URL_
const bodyParser = require('body-parser')
const app = require('express')()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.post('/login', (req, res) => {
    axios.get(AXIOS_BASE_URL + '/login.json').then((res) => {
        console.log(res.data)
    })
    console.log(req.body)
    res.send('hello word')
})

module.exports = {
    path: '/api/',
    handler: app
}