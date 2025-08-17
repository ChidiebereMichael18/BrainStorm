import React, { useState, useEffect } from 'react'
import { postsAPI } from '../services/api';
import { showToast } from '../utils/toast';

function MyPosts() {
  const [posts, setPosts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [newPost, setNewPost] = useState({
    title: '',
    description: '',
    category: 'gaming',
    teamSize: '',
    skillLevel: '',
    deadline: '',
    tags: '',
    contactMethod: 'discord',
    contactInfo: ''
  });

  const fetchPosts = async () => {
    try {
      const response = await postsAPI.getMyPosts();
      setPosts(response.data);
    } catch (err) {
      console.error('Failed to fetch posts:', err);
    }
  };

  const handleEdit = (post) => {
    setEditingPost(post);
    setNewPost({
      title: post.title,
      description: post.description,
      category: post.category,
      teamSize: post.teamSize,
      skillLevel: post.skillLevel,
      deadline: post.deadline,
      tags: post.tags.join(', '),
      contactMethod: post.contactMethod,
      contactInfo: post.contactInfo
    });
    setShowForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const postData = {
        ...newPost,
        tags: newPost.tags.split(',').map(tag => tag.trim())
      };

      if (editingPost) {
        await postsAPI.updatePost(editingPost._id, postData);
        showToast.success('Post updated successfully!');
      } else {
        await postsAPI.createPost(postData);
        showToast.success('Post created successfully!');
      }
      
      setShowForm(false);
      setEditingPost(null);
      setNewPost({
        title: '',
        description: '',
        category: 'gaming',
        teamSize: '',
        skillLevel: '',
        deadline: '',
        tags: '',
        contactMethod: 'discord',
        contactInfo: ''
      });
      fetchPosts();
    } catch (err) {
      showToast.error('Failed to save post');
    }
  };

  const handleDelete = async (postId) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await postsAPI.deletePost(postId);
        showToast.success('Post deleted successfully!');
        fetchPosts();
      } catch (err) {
        showToast.error('Failed to delete post');
      }
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Update the form title and button text based on editing state
  const formTitle = editingPost ? 'Edit Post' : 'Create New Post';
  const buttonText = editingPost ? 'Update Post' : 'Create Post';

  return (
    <div className="min-h-screen bg-black p-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-green-500">My Posts</h1>
          <button
            onClick={() => {
              setShowForm(!showForm);
              if (!showForm) {
                setEditingPost(null);
                setNewPost({
                  title: '',
                  description: '',
                  category: 'gaming',
                  teamSize: '',
                  skillLevel: '',
                  deadline: '',
                  tags: '',
                  contactMethod: 'discord',
                  contactInfo: ''
                });
              }
            }}
            className="bg-green-500 text-black px-4 py-2 rounded-lg hover:bg-green-400"
          >
            {showForm ? 'Cancel' : 'Create New Post'}
          </button>
        </div>

        {/* Update form title */}
        {showForm && (
          <form onSubmit={handleSubmit} className="bg-gray-900/50 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-green-500 mb-6">{formTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Title"
                className="bg-black text-green-400 p-2 rounded border border-gray-800 focus:border-green-500 outline-none"
                value={newPost.title}
                onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                required
              />
              <select
                className="bg-black text-green-400 p-2 rounded border border-gray-800 focus:border-green-500 outline-none"
                value={newPost.category}
                onChange={(e) => setNewPost({...newPost, category: e.target.value})}
              >
                <option value="gaming">Gaming</option>
                <option value="research">Research</option>
                <option value="development">Development</option>
              </select>
              <input
                type="text"
                placeholder="Team Size"
                className="bg-black text-green-400 p-2 rounded border border-gray-800 focus:border-green-500 outline-none"
                value={newPost.teamSize}
                onChange={(e) => setNewPost({...newPost, teamSize: e.target.value})}
                required
              />
              <input
                type="text"
                placeholder="Skill Level Required"
                className="bg-black text-green-400 p-2 rounded border border-gray-800 focus:border-green-500 outline-none"
                value={newPost.skillLevel}
                onChange={(e) => setNewPost({...newPost, skillLevel: e.target.value})}
                required
              />
              <input
                type="text"
                placeholder="Deadline"
                className="bg-black text-green-400 p-2 rounded border border-gray-800 focus:border-green-500 outline-none"
                value={newPost.deadline}
                onChange={(e) => setNewPost({...newPost, deadline: e.target.value})}
                required
              />
              <input
                type="text"
                placeholder="Tags (comma-separated)"
                className="bg-black text-green-400 p-2 rounded border border-gray-800 focus:border-green-500 outline-none"
                value={newPost.tags}
                onChange={(e) => setNewPost({...newPost, tags: e.target.value})}
                required
              />
              
              <div className="flex gap-4">
                <select
                  className="bg-black text-green-400 p-2 rounded border border-gray-800 focus:border-green-500 outline-none w-1/3"
                  value={newPost.contactMethod}
                  onChange={(e) => setNewPost({...newPost, contactMethod: e.target.value})}
                >
                  <option value="discord">Discord</option>
                  <option value="phone">Phone</option>
                  <option value="email">Email</option>
                  <option value="whatsapp">WhatsApp</option>
                </select>
                <input
                  type="text"
                  placeholder="Contact Information"
                  className="bg-black text-green-400 p-2 rounded border border-gray-800 focus:border-green-500 outline-none flex-1"
                  value={newPost.contactInfo}
                  onChange={(e) => setNewPost({...newPost, contactInfo: e.target.value})}
                  required
                />
              </div>
            </div>
            <textarea
              placeholder="Description"
              className="w-full bg-black text-green-400 p-2 rounded border border-gray-800 focus:border-green-500 outline-none mt-4"
              value={newPost.description}
              onChange={(e) => setNewPost({...newPost, description: e.target.value})}
              rows="4"
              required
            />
            <button
              type="submit"
              className="mt-4 bg-green-500 text-black px-6 py-2 rounded-lg hover:bg-green-400"
            >
              {buttonText}
            </button>
          </form>
        )}

        {posts.length === 0 ? (
          <div className="text-gray-400 text-center py-12">You haven't made any posts yet</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map(post => (
              <div key={post._id} className="bg-gray-900/50 rounded-lg p-4 border border-gray-800">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-green-400">{post.title}</h3>
                  <span className="px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded-full capitalize">
                    {post.category}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-4">{post.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                  <span>👥 {post.teamSize}</span>
                  <span>🎯 {post.skillLevel}</span>
                  <span>⏰ {post.deadline}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-green-500/5 text-green-400 text-xs rounded-md border border-green-900/50">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <div className="flex items-center justify-between">
                    <div className="text-gray-400 text-sm">
                      Contact via: <span className="text-green-400 capitalize">{post.contactMethod}</span>
                    </div>
                    <button
                      onClick={() => window.open(`${getContactLink(post.contactMethod, post.contactInfo)}`)}
                      className="bg-green-500 hover:bg-green-400 text-black px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      Join Project
                    </button>
                  </div>
                </div>
                <div className="flex justify-end gap-2 mt-4">
                  <button
                    onClick={() => handleEdit(post)}
                    className="bg-green-500/10 text-green-400 px-3 py-1 rounded-lg text-sm hover:bg-green-500/20"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(post._id)}
                    className="bg-red-500/10 text-red-400 px-3 py-1 rounded-lg text-sm hover:bg-red-500/20"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// Helper function to generate contact links
const getContactLink = (method, info) => {
  switch (method) {
    case 'phone':
      return `tel:${info}`;
    case 'email':
      return `mailto:${info}`;
    case 'whatsapp':
      return `https://wa.me/${info}`;
    case 'discord':
      return `discord://${info}`;
    default:
      return '#';
  }
};

export default MyPosts