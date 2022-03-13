
const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    numberOftest: {
        type: Number,
        required: true
    },
    Tests_Pass: {
        type: Number,
        required: true
    },
    Tests_Failed: {
        type: Number,
        required: true
    },
    totalTestTitme: {
        type: Number,
        required: true
    },
    lastTestDate: {
        type: Number,
        required: true
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('website', userSchema)