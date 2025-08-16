import React, { useState } from 'react'

function MyPosts() {
  const [posts, setPosts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    description: '',
    category: 'gaming',
    teamSize: '',
    skillLevel: '',
    deadline: '',
    tags: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = {
      ...newPost,
      id: Date.now(),
      tags: newPost.tags.split(',').map(tag => tag.trim()),
      createdAt: new Date().toISOString()
    };
    setPosts([post, ...posts]);
    setShowForm(false);
    setNewPost({
      title: '',
      description: '',
      category: 'gaming',
      teamSize: '',
      skillLevel: '',
      deadline: '',
      tags: ''
    });
  };

  return (
    <div className="min-h-screen bg-black p-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-green-500">My Posts</h1>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-green-500 text-black px-4 py-2 rounded-lg hover:bg-green-400"
          >
            {showForm ? 'Cancel' : 'Create New Post'}
          </button>
        </div>

        {showForm && (
          <form onSubmit={handleSubmit} className="bg-gray-900/50 rounded-lg p-6 mb-8">
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
              Post
            </button>
          </form>
        )}

        {posts.length === 0 ? (
          <div className="text-gray-400 text-center py-12">You haven't made any posts yet</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map(post => (
              <div key={post.id} className="bg-gray-900/50 rounded-lg p-4 border border-gray-800">
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
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MyPosts