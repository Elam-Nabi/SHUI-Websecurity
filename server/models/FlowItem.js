const { Schema, model } = require('mongoose');

const FlowItemSchema = new Schema({
    description: {
        type: String,
        required: true,
    },
    tags: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    userID: {
        type: String,
        required: true
    }
})

const FlowItem = model('flowItem', FlowItemSchema)

module.exports = FlowItem