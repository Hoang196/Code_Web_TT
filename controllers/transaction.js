import { TransactionModel } from "../models/TransactionModel.js";
import { PostModel } from "../models/PostModel.js";
import { UserModel } from "../models/UserModel.js";


export const getUserHistory = async (req, res, next) => {
    try {
        const userId = req.params.userId;
        const tranFrom = await TransactionModel.find({ from_user_id: userId });
        const tranTo = await TransactionModel.find({ to_user_id: userId });
        const trans = [...tranFrom, ...tranTo];
        let resTrans = [];

        for (let i = 0; i < trans.length; i++) {
            let from_user_name = await UserModel.findOne({ _id: trans[i].from_user_id });
            let to_user_name = await UserModel.findOne({ _id: trans[i].to_user_id });
            let from_post_name = await PostModel.findOne({ _id: trans[i].from_post_id });
            let to_post_name = await PostModel.findOne({ _id: trans[i].to_post_id });
            resTrans.push({
                ...(trans[i]._doc),
                from_user_name: from_user_name.username,
                to_user_name: to_user_name.username,
                from_post_name: from_post_name.name,
                to_post_name: to_post_name.name
            })
            console.log("user ID: ", resTrans[i]);
        }

        res.status(200).json(resTrans);
    } catch (err) {
        res.status(500).json({ detail: "Phát hiện lỗi. Vui lòng thử lại!" });
    }
}

export const completeTransaction = async (req, res, next) => {
    try {
        const tranId = req.params.tranId;
        const tranIsAccepted = await TransactionModel.findOne({ _id: tranId });
        const listId = await TransactionModel.find({ to_post_id: tranIsAccepted.to_post_id })

        await PostModel.findByIdAndUpdate(tranIsAccepted.to_post_id, {
            status: "unavailable"
        })

        await PostModel.findByIdAndUpdate(tranIsAccepted.from_post_id, {
            status: "unavailable"
        })

        for (let i = 0; i < listId.length; i++) {
            await TransactionModel.findByIdAndUpdate(listId[i]._id, {
                status: "Rejected",
                extra: "Bạn đã bị từ chối giao dịch này"
            })
        }

        await TransactionModel.findByIdAndUpdate(tranId, {
            status: "Completed",
            extra: "Bạn đã trao đổi thành công giao dịch này"
        })

        res.status(200).json({
            status_code: 200,
            detail: "Giao dịch thành công!"
        });
    } catch (err) {
        res.status(500).json({ detail: "Giao dịch không thành công!" });
    }
}

export const getProductWantToTrade = async (req, res, next) => {
    try {
        const productId = req.params.productId;
        const listTrans = await TransactionModel.find({ to_post_id: productId });
        let resTrans = [];

        for (let i = 0; i < listTrans.length; i++) {
            const productFrom = await PostModel.findOne({ _id: listTrans[i].from_post_id })
            const itemOfTrans = {
                transaction_id: listTrans[i]._id,
                trading_post: productFrom
            }
            resTrans.push(itemOfTrans)
        }

        res.status(200).json(resTrans);
    } catch (err) {
        res.status(500).json({ detail: "Phát hiện lỗi. Vui lòng thử lại!" });
    }
}

export const createTransaction = async (req, res, next) => {
    try {
        const newTran = req.body;
        const tran = new TransactionModel(newTran);
        await tran.save();
        res.status(200).json({
            status_code: 200,
            detail: "Thêm giao dịch thành công!"
        });
    } catch (err) {
        res.status(500).json({ detail: "Thêm giao dịch không thành công!" });
    }
}