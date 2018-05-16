let mongoose = require('mongoose')
let Schema = mongoose.Schema

let AnnSchema = new Schema({
    title: { type: String , required: true },
    content: { type: String , required: true },
    createDate: { type: Date, default: new Date() },
    author: { type: String , required: true }
})

mongoose.model('Ann', AnnSchema)

mongoose.connect('mongodb://localhost:27017/ck_70th_graduation', err => {
    if (err) {
        console.log('Failed to connect db.')
    } else {
        console.log('connected to db')
    }
})