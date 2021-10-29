import { PostModel } from "../models/PostModel.js";


export const getPostDataByUserId = async (req, res, next) => {
    try {
        const userId = req.params.userId;
        const posts = await PostModel.find({ owner_id: userId, status: "available" });
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ detail: "Phát hiện lỗi. Vui lòng thử lại!" });
    }
}

export const getPostDataByUserIdFake = async (req, res, next) => {
    try {
        const userId = req.params.userId;
        const posts = await PostModel.find({ owner_id: userId });
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ detail: "Phát hiện lỗi. Vui lòng thử lại!" });
    }
}

export const getPostDataByPostId = async (req, res, next) => {
    try {
        const id = req.params.id;
        const post = await PostModel.findOne({ _id: id, status: "available" });
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ detail: "Phát hiện lỗi. Vui lòng thử lại!" });
    }
}

export const getPostBySearch = async (req, res, next) => {
    try {
        const key = req.params.key;
        const prePosts = await PostModel.find(
            { $text: { $search: key } },
            { score: { $meta: "textScore" } }
        ).sort({ score: { $meta: "textScore" } })

        let posts = [];
        for (let i = 0; i < prePosts.length; i++) {
            if (prePosts[i].status === "available") {
                posts.push(prePosts[i]);
            }
        }

        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ detail: "Phát hiện lỗi. Vui lòng thử lại!" });
    }
}

export const getPostOfUserBySearch = async (req, res, next) => {
    try {
        const id = req.params.id;
        const key = req.query.key;
        const prePosts = await PostModel.find(
            { $text: { $search: key } },
            { score: { $meta: "textScore" } }
        ).sort({ score: { $meta: "textScore" } })

        let posts = [];
        for (let i = 0; i < prePosts.length; i++) {
            if (prePosts[i].owner_id === id && prePosts[i].status === "available") {
                posts.push(prePosts[i]);
            }
        }

        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ detail: "Phát hiện lỗi. Vui lòng thử lại!" });
    }
}

export const getAllPostData = async (req, res, next) => {
    try {
        const posts = await PostModel.find({ status: "available" });
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ detail: "Phát hiện lỗi. Vui lòng thử lại!" });
    }
}

export const createPostData = async (req, res, next) => {
    try {
        const newPost = req.body;
        const convertedImages = newPost.image_url.split(' ');
        const [mainImg, ...desImgs] = convertedImages;
        const postNew = {
            ...newPost,
            main_image: mainImg,
            image_url: desImgs,
        }
        const post = new PostModel(postNew);
        await post.save();
        res.status(200).json({
            status_code: 200,
            detail: "Thêm bài thành công!"
        });
    } catch (err) {
        res.status(500).json({ detail: "Thêm bài không thành công!" });
    }
}

export const editPostData = async (req, res, next) => {
    try {
        const newPost = req.body;
        const { _id, ...post } = newPost;
        const convertedImages = newPost.image_url.split(' ');
        const [mainImg, ...desImgs] = convertedImages;
        const postNew = {
            ...post,
            main_image: mainImg,
            image_url: desImgs,
        }
        await PostModel.findByIdAndUpdate(_id, postNew)
        res.status(200).json({
            status_code: 200,
            detail: "Sửa bài thành công!"
        });
    } catch (err) {
        res.status(500).json({ detail: "Sửa bài không thành công!" });
    }
}

export const deletePostData = async (req, res, next) => {
    try {
        const id = req.params.id;
        await PostModel.findByIdAndUpdate(id, {
            status: "unavailable",
        });
        res.status(200).json({
            status_code: 200,
            detail: "Xóa bài thành công!"
        });
    } catch (err) {
        res.status(500).json({ detail: "Xóa bài không thành công!" });
    }
}