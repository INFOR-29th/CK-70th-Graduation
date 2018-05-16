require('./db.js')
const express = require('express')
const app     = express()
const config  = require('./config.json')
const router = express.Router({ mergeParams: true });
const port    = config.port || 3000;

router.get('/ann/:id', (req, res, next) => {
    let id = req.params.id;
    console.log(id);
    // Ann.fi()
});

router.post('/ann', (req, res, next) => {

});

router.put('/ann', (req, res, next) => {

});

router.delete('/ann', (req, res, next) => {

});

module.exports = router;
