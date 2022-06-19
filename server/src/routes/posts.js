import express from 'express';

import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';
import auth from '../middleware/authenticate.js';
const router = express.Router();

router.get('/', getPosts);
router.post('/', auth,createPost);
router.patch("/:id",auth, updatePost);

// router.get('/:id', getPost);
router.delete('/:id', auth,deletePost);
router.patch('/:id/likePost',auth, likePost);

export default router;