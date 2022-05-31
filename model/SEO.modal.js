
const mongoose = require('mongoose')


const SEOSchema = mongoose.Schema({
    total_traffic: {
        type: Number,
        required: true
    },
    key_Word: {
        type: Number,
        required: true
    },
    total_traffic_cost: {
        type: Number,
        required: true
    },
    backlinks: {
        type: Number,
        required: true
    },
    keyWord_1: {
        type: String,
        required: true
    },
    keyWord_2: {
        type: String,
        required: true
    },
    keyWord_3: {
        type: String,
        required: true
    },
    keyWord_4: {
        type: String,
        required: true
    },
    keyWord_5: {
        type: String,
        required: true
    },
    keyWord_6: {
        type: String,
        required: true
    },
    keyWord_7: {
        type: String,
        required: true
    },
    keyWord_8: {
        type: String,
        required: true
    },
    keyWord_9: {
        type: String,
        required: true
    },
    keyWord_10: {
        type: String,
        required: true
    },
    LinkOwner: {
        type: mongoose.Schema.Types.ObjectId, ref: "link",
        required: true
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('SEO', SEOSchema)