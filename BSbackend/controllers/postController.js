const asyncHandler = require('express-async-handler');
const Post = require('../models/postModel');
const mongoose = require('mongoose');

const getPosts = asyncHandler(async (req, res) => {
    const posts = await Post.find({ category: req.query.category })
                           .populate('user', 'username');
    res.status(200).json(posts);
});

const createPost = asyncHandler(async (req, res) => {
    const { title, description, category, teamSize, skillLevel, deadline, tags, contactMethod, contactInfo } = req.body;

    if (!title || !description || !category || !contactMethod || !contactInfo) {
        res.status(400);
        throw new Error('Please fill all required fields');
    }

    const post = await Post.create({
        user: req.user.id,
        title,
        description,
        category,
        teamSize,
        skillLevel,
        deadline,
        tags,
        contactMethod,
        contactInfo
    });

    res.status(201).json(post);
});

const getPostsByCategory = asyncHandler(async (req, res) => {
    const { category } = req.params;
    console.log('getPostsByCategory - category:', category);
    if (!['gaming', 'research', 'development'].includes(category)) {
        res.status(400);
        throw new Error('Invalid category');
    }
    const posts = await Post.find({ category }).populate('user', 'username');
    res.json(posts);
});

const getPostsByTag = asyncHandler(async (req, res) => {
    const posts = await Post.find({ tags: req.params.tag }).populate('user', 'username');
    res.json(posts);
});

const getPostsByUser = asyncHandler(async (req, res) => {
    const { userId } = req.params;
    console.log('getPostsByUser - Request URL:', req.originalUrl);
    console.log('getPostsByUser - userId:', userId, 'req.user.id:', req.userId);

    let targetUserId = userId || req.user.id;

    if (!targetUserId || !mongoose.Types.ObjectId.isValid(targetUserId)) {
        res.status(400);
        throw new Error('Invalid or missing userId');
    }

    const posts = await Post.find({ user: targetUserId }).populate('user', 'username');
    res.json(posts);
});

const updatePost = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id);
    if (!post) {
        res.status(404);
        throw new Error('Post not found');
    }
    if (post.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error('User not authorized');
    }
    const updatedPost = await Post.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    ).populate('user', 'username');
    res.json(updatedPost);
});

const deletePost = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id);
    if (!post) {
        res.status(404);
        throw new Error('Post not found');
    }
    if (post.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error('User not authorized');
    }
    await post.deleteOne();
    res.json({ id: req.params.id });
});

const searchPosts = asyncHandler(async (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.status(400);
        throw new Error('Search query is required');
    }

    const posts = await Post.find({
        $or: [
            { title: { $regex: q, $options: 'i' } },
            { description: { $regex: q, $options: 'i' } },
            { tags: { $regex: q, $options: 'i' } }
        ]
    }).populate('user', 'username');

    res.json(posts);
});

module.exports = {
    getPosts,
    createPost,
    getPostsByTag,
    getPostsByUser,
    updatePost,
    deletePost,
    searchPosts,
    getPostsByCategory
};