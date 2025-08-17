const express = require('express');
const router = express.Router();
const { 
    getPosts, 
    createPost, 
    // getPostById,
    getPostsByTag,
    getPostsByUser,
    getPostsByCategory,
    updatePost,
    deletePost,
    searchPosts
} = require('../controllers/postController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', getPosts);
router.post('/create', protect, createPost);
router.get('/tag/:tag', getPostsByTag);
router.get('/user/:userId', getPostsByUser);
// router.get('/:id', getPostById);
router.put('/:id', protect, updatePost);
router.delete('/:id', protect, deletePost);
router.get('/search', searchPosts);
router.get('/category/:category', getPostsByCategory);

module.exports = router;