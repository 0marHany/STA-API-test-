
const mongoose = require('mongoose')


const SecuritySchema = mongoose.Schema({
    final_score: {
        type: String,
        required: true
    },
    server_ip: {
        type: String,
        required: true
    },
    software_found: {
        type: Number,
        required: true
    },
    software_outdated: {
        type: Number,
        required: true
    },
    software_vulnerabil: {
        type: Number,
        required: true
    },
    lib_json: [{
        name: String,
        version: String,
        message: String,
        vulnerabil: [{
            score: String,
            cve: String,
            type: String,
        },],
        required: true
    }],
    LinkOwner: {
        type: mongoose.Schema.Types.ObjectId, ref: "link",
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Security', SecuritySchema)