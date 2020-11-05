const bcrypt = require('bcryptjs');
const { Schema, model } = require('mongoose');

// const SALT_WORK_FACTOR = 10;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        createIndexes: { unique: true },
    },
    password: { type: String, required: true },
});

// UserSchema.pre('save', async function save(next) {
//     if (!this.isModified('password')) return next();
//     try {
//         const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
//         this.password = await bcrypt.hash(this.password, salt);
//         return next();
//     } catch (err) {
//         return next(err);
//     }
// });

UserSchema.methods.validatePassword = async function validatePassword(data) {
    return bcrypt.compare(data, this.password);
};

const User = model('user', UserSchema);

module.exports = User;