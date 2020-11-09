const { Schema, model } = require('mongoose');

const FlowTagSchema = new Schema({
    tag: {
        type: String,
        required: true,
    },
    userID: {
        type: String,
        required: true
    }
})

const FlowTag = model('flowTag', FlowTagSchema)

module.exports = FlowTag