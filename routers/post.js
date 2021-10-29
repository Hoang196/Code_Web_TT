import express from 'express';
import {
    getPostDataByUserId, getPostDataByUserIdFake, getPostDataByPostId, getPostBySearch, getPostOfUserBySearch,
    getAllPostData, createPostData, editPostData, deletePostData
} from '../controllers/post.js';

const router = express.Router();

router.get('/api/get_posts_by_userId/:userId', getPostDataByUserId);

router.get('/api/get_posts_by_userId_fake/:userId', getPostDataByUserIdFake);

router.get('/api/get_post_by_id/:id', getPostDataByPostId);

router.get('/api/search_post/:key', getPostBySearch);

router.get('/api/search_post_user/:id', getPostOfUserBySearch);

router.get('/api/get_all_post', getAllPostData);

router.post('/api/add_post', createPostData);

router.post('/api/edit_post', editPostData);

router.delete('/api/delete_post/:id', deletePostData);

export default router;