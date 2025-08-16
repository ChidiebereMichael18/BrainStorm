const asyncHandler = require('express-async-handler');
const Post = require('../models/postModel');

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

const getPostById = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id).populate('user', 'username');
    if (!post) {
        res.status(404);
        throw new Error('Post not found');
    }
    res.json(post);
});

const getPostsByTag = asyncHandler(async (req, res) => {
    const posts = await Post.find({ tags: req.params.tag }).populate('user', 'username');
    res.json(posts);
});

const getPostsByUser = asyncHandler(async (req, res) => {
    const posts = await Post.find({ user: req.params.userId }).populate('user', 'username');
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

    await post.remove();
    res.json({ id: req.params.id });
});

// const applyToPost = asyncHandler(async (req, res) => {
//     const post = await Post.findById(req.params.id);
    
//     if (!post) {
//         res.status(404);
//         throw new Error('Post not found');
//     }

//     // Check if user already applied
//     const alreadyApplied = post.applicants.find(
//         applicant => applicant.userId.toString() === req.user.id
//     );

//     if (alreadyApplied) {
//         res.status(400);
//         throw new Error('Already applied to this post');
//     }

//     post.applicants.push({
//         userId: req.user.id,
//         status: 'pending'
//     });

//     await post.save();
//     res.status(200).json({ message: 'Application submitted successfully' });
// });

module.exports = {
    getPosts,
    createPost,
    getPostById,
    getPostsByTag,
    getPostsByUser,
    updatePost,
    deletePost,
};
