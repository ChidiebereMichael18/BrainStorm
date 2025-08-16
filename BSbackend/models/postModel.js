const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    },
    category: {
        type: String,
        required: [true, "Category is required"],
        enum: ['gaming', 'development', 'research']
    },
    teamSize: {
        type: String,
        required: true
    },
    skillLevel: {
        type: String,
        required: true
    },
    deadline: {
        type: String,
        required: true
    },
    tags: [{
        type: String
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model("Post", postSchema);
