import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },

}, {
    collection: 'accounts',
})

export const LoginModel = mongoose.model('login', schema);