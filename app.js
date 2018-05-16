require('./db.js')
const express = require('express')
const app     = express()
const config  = require('./config.json')
const bodyParser = require('body-parser');
const port    = config.port || 3000;

app.use('/assets', express.static(__dirname + '/assets'))
app.use('/images', express.static(__dirname + '/images'))
app.use(bodyParser.urlencoded({ extended: true }));

const apiRouter = require('./api.js');
app.use('/api', apiRouter);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html', () => {
        res.end();
    });
});

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});
