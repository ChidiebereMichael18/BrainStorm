const asyncHandler = require('express-async-handler');
const Post = require('../models/postModel');
const User = require('../models/userModel');

const getStats = asyncHandler(async (req, res) => {
    // Total active projects (posts without a completion status or not marked as completed)
    const activeProjects = await Post.countDocuments({});

    // Total collaborators (all users)
    const collaborators = await User.countDocuments({});

    // Total completed projects (assuming a 'status' field in Post model; adjust if needed)
    const completedProjects = await Post.countDocuments({ status: 'completed' });

    // New posts today
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);
    const newToday = await Post.countDocuments({
        createdAt: { $gte: startOfDay },
    });

    res.status(200).json({
        activeProjects,
        collaborators,
        completedProjects,
        newToday,
    });
});

module.exports = { getStats };