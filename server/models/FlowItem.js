const { Schema, model } = require('mongoose');

const FlowItemSchema = new Schema({
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
})

const FlowItem = model('flowItem', FlowItemSchema)

module.exports = FlowItem