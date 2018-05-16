require('./db.js')
const express = require('express')
const app     = express()
const config  = require('./config.json')
const port    = config.port || 3000;

app.use('/assets', express.static(__dirname + '/assets'))
app.use('/images', express.static(__dirname + '/images'))

app.get('/api/ann/:id', (req, res) => {
    let id = req.params.id;
    Ann.findById()
});

app.post('/api/ann', (req, res) => {

});

app.put('/api/ann', (req, res) => {

});

app.delete('/api/ann', (req, res) => {

});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
