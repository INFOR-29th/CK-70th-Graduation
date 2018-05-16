require('./db.js')
const express = require('express');
const router = express.Router({ mergeParams: true });

router.get('/ann', (res, req) => {
    console.log(`params = ${params}`);
});

router.post('/ann', (req, res) => {

});

router.put('/ann', (req, res) => {

});

router.delete('/ann', (req, res) => {

});