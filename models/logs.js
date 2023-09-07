const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    author:{type: String, required: true},
    body:{type: String, required: true}
}, {timestamps: true})

//Schema
const logsSchema = new mongoose.Schema({
    title: {type: String, required: true},
    entry: {type: String, required: true},
    shipIsBroken: {type: Boolean},
    comments: [commentSchema]
}, {timestamps : true})

const logs = mongoose.model('logs', logsSchema);

module.exports = logs;  