const express = require('express')
const app     = express()
const config  = require('./config.json')
const port    = config.port || 3000;

app.use('/assets', express.static(__dirname + '/assets'))
app.use('/images', express.static(__dirname + '/images'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html', () => {
        res.end()
    })
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
