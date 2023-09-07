const mongoose = require('mongoose');

//Schema
const logsSchema = new mongoose.Schema({
    title: {type: String, require: true},
    entry: {type: String, require: true},
    shipIsBroken: {type: Boolean}
}, {timestamps : true})

const logs = mongoose.model('logs', logsSchema);

module.exports = logs;  