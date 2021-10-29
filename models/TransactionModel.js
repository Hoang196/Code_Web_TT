import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    from_post_id: {
        type: String,
        required: true
    },
    to_post_id: {
        type: String,
        required: true,
    },
    from_user_id: {
        type: String,
        required: true
    },
    to_user_id: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: "Đang chờ",
    },
    extra: {
        type: String,
        default: "Giao dịch đang chờ xử lý",
    },

}, {
    timestamps: true
}, {
    collection: 'transactions',
})

export const TransactionModel = mongoose.model('transaction', schema);