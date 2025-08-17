const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    teamSize: { type: Number },
    skillLevel: { type: String },
    deadline: { type: Date },
    tags: { type: [String], default: [] },
    contactMethod: { type: String, required: true },
    contactInfo: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    status: { type: String, default: 'active', enum: ['active', 'completed'] },
}, { timestamps: true });