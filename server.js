const express = require('express')
const app     = express()
const bodyParser = require('body-parser')
const apiRouter = require('./api/api.js')
const config  = require('./config.json')
const port    = config.port || 3000

app.use('/', express.static(__dirname + '/creative'))
app.use('/api', apiRouter)
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/frontend/index.html', () => {
        res.end()
    })
})

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})
