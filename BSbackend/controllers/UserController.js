const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('../models/userModel');

const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password, name, bio, skills, interests } = req.body;

    if (!username || !email || !password) {
        res.status(400);
        throw new Error('Please provide username, email, and password');
    }

    const userExists = await User.findOne({ $or: [{ email }, { username }] });
    if (userExists) {
        res.status(400);
        throw new Error(userExists.email === email ? 'Email already in use' : 'Username already taken');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
        username,
        email,
        password: hashedPassword,
        name: name || '',
        bio: bio || '',
        skills: skills || [],
        interests: interests || [],
        stats: { posts: 0, collaborations: 0, contributions: 0 },
    });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });

    res.status(201).json({
        id: user._id,
        username: user.username,
        email: user.email,
        name: user.name,
        bio: user.bio,
        skills: user.skills,
        interests: user.interests,
        stats: user.stats,
        token,
    });
});

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400);
        throw new Error('Please provide email and password');
    }

    const user = await User.findOne({ email });
    if (!user) {
        res.status(401);
        throw new Error('Invalid email or password');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        res.status(401);
        throw new Error('Invalid email or password');
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });

    res.status(200).json({
        id: user._id,
        username: user.username,
        email: user.email,
        name: user.name,
        bio: user.bio,
        skills: user.skills,
        interests: user.interests,
        stats: user.stats,
        token,
    });
});

const getUser = asyncHandler(async (req, res) => {
    const { userId } = req.params;

    if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
        res.status(400);
        throw new Error('Invalid or missing userId');
    }

    if (userId !== req.user.id) {
        res.status(401);
        throw new Error('Not authorized to access this user');
    }

    const user = await User.findById(userId).select('-password');
    if (!user) {
        res.status(404);
        throw new Error('User not found');
    }

    res.status(200).json({
        id: user._id,
        username: user.username,
        email: user.email,
        name: user.name,
        bio: user.bio,
        skills: user.skills,
        interests: user.interests,
        stats: user.stats,
    });
});

const updateUser = asyncHandler(async (req, res) => {
    const { userId } = req.params;
    const { username, email, password, name, bio, skills, interests, stats } = req.body;

    if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
        res.status(400);
        throw new Error('Invalid or missing userId');
    }

    if (userId !== req.user.id) {
        res.status(401);
        throw new Error('Not authorized to update this user');
    }

    const user = await User.findById(userId);
    if (!user) {
        res.status(404);
        throw new Error('User not found');
    }

    if (username && username !== user.username) {
        const usernameExists = await User.findOne({ username });
        if (usernameExists) {
            res.status(400);
            throw new Error('Username already taken');
        }
        user.username = username;
    }

    if (email && email !== user.email) {
        const emailExists = await User.findOne({ email });
        if (emailExists) {
            res.status(400);
            throw new Error('Email already in use');
        }
        user.email = email;
    }

    if (password) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
    }

    if (name) user.name = name;
    if (bio) user.bio = bio;
    if (skills) user.skills = skills;
    if (interests) user.interests = interests;
    if (stats) user.stats = stats;

    const updatedUser = await user.save();

    const token = jwt.sign({ id: updatedUser._id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });

    res.status(200).json({
        id: updatedUser._id,
        username: updatedUser.username,
        email: updatedUser.email,
        name: updatedUser.name,
        bio: updatedUser.bio,
        skills: updatedUser.skills,
        interests: updatedUser.interests,
        stats: updatedUser.stats,
        token,
    });
});

module.exports = {
    registerUser,
    loginUser,
    getUser,
    updateUser,
};