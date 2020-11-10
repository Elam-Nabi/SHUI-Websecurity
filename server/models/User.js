const bcrypt = require('bcryptjs');
const { Schema, model } = require('mongoose');


const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        createIndexes: { unique: true },
    },
    password: { type: String, required: true },
    userID: {
        type: String
    }
});


UserSchema.methods.validatePassword = async function validatePassword(data) {
    return bcrypt.compare(data, this.password);
};

const User = model('user', UserSchema);

module.exports = User;