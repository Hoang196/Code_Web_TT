import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    owner_id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        default: " ",
    },
    main_image: {
        type: String,
        required: true,
    },
    image_url: {
        type: Array,
        required: true,
    },
    status: {
        type: String,
        default: "available",
    },

}, {
    timestamps: true
}, {
    collection: 'posts',
})

export const PostModel = mongoose.model('post', schema);