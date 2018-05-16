require('./db.js')
const express = require('express');
const app = express();
const port = 3000;

// mongoose.connect('mongodb://localhost/infor-academy');

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
  console.log(`listening on port ${port}`);
});
