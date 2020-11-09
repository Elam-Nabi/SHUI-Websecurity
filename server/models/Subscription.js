const { Schema, model } = require('mongoose');

const SubscribeTags = new Schema({
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
})

const SubscribeTag = model('subscriptions', SubscribeTags)

module.exports = SubscribeTag