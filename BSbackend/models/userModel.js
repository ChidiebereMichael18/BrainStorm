const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, default: '' },
    bio: { type: String, default: '' },
    skills: { type: [String], default: [] },
    interests: { type: [String], default: [] },
    stats: {
        posts: { type: Number, default: 0 },
        collaborations: { type: Number, default: 0 },
        contributions: { type: Number, default: 0 },
    },
}, { timestamps: true });
module.exports = mongoose.model("User", userSchema);
