
const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    link: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('link', userSchema)