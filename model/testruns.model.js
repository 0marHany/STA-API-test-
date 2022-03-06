
const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    AR: {
        type: String,
        required: true
    },
    ER: {
        type: String,
        required: true
    },
    result: {
        type: String,
        required: true
    },
    started: {
        type: Number,
        required: true
    },
    end: {
        type: Number,
        required: true
    },
    calculation: {
        type: Number,
        required: true
    },
    description: {
        type: Number,
        required: false
    },

})

module.exports = mongoose.model('testrun', userSchema)