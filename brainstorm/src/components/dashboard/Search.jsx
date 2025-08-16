import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Add search logic here
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="relative">
      <div className="flex items-center">
          <form onSubmit={handleSearch} className="absolute right-6 top-12 w-72">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search projects, skills, tags..."
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-green-400 focus:outline-none focus:border-green-500"
              autoFocus
            />
          </form>
      </div>
    </div>
  );
}

export default Search;
