
let { mongoose, Ann } = require('./db.js')
const express = require('express');
const config  = require('./config.json')
const router  = express.Router({ mergeParams: true });
const port    = config.port || 3000;

router.get('/ann', (req, res) => {
    Ann.find().then((anns) => {
        console.log(anns)
        res.send(anns)
    })
});

router.post('/ann', (req, res) => {
    let ann  = new Ann({
        title: 'jizz',
        content: 'jizz'
    })
    ann.save().then((doc) => {
        res.send(doc)
    }, (e) => {
        res.status(400).send(e)
    })
})

router.put('/ann', (req, res, next) => {

});

router.delete('/ann', (req, res, next) => {

});

module.exports = router;
