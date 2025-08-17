import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { postsAPI } from '../../services/api';
import { showToast } from '../../utils/toast';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setLoading(true);
    try {
      const response = await postsAPI.searchPosts(searchTerm);
      setResults(response.data);
    } catch (err) {
      showToast.error('Failed to search posts');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black p-4">
      <div className="container mx-auto max-w-4xl">
        <form onSubmit={handleSearch} className="mb-8">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search projects, skills, tags..."
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 pr-12 text-green-400 focus:outline-none focus:border-green-500"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              <FiSearch className="text-green-500 w-5 h-5" />
            </button>
          </div>
        </form>

        {loading ? (
          <div className="text-green-500 text-center">Searching...</div>
        ) : results.length > 0 ? (
          <div className="grid gap-4">
            {results.map((post) => (
              <div
                key={post._id}
                className="bg-gray-900/50 rounded-lg p-4 border border-gray-800"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-green-400">{post.title}</h3>
                  <span className="px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded-full capitalize">
                    {post.category}
                  </span>
                </div>
                <p className="text-gray-400 text-sm">{post.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {post.tags?.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-green-500/5 text-green-400 text-xs rounded-md border border-green-900/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : searchTerm && !loading ? (
          <div className="text-gray-400 text-center">No results found</div>
        ) : null}
      </div>
    </div>
  );
}

export default Search;
