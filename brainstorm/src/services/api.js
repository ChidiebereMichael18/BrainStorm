import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        'Content-Type': 'application/json'
    }
});

// Add auth token to requests if it exists
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const authAPI = {
    // Register a new user
    register: (userData) => api.post('/api/users/register', userData),
    // Login user and get token
    login: (credentials) => api.post('/api/users/login', credentials),
    // Get authenticated user's profile
    getUser: (userId) => api.get(`/api/users/${userId}`),
    // Update authenticated user's profile
    updateUser: (userId, userData) => api.put(`/api/users/${userId}`, userData),
};

export const postsAPI = {
    // Get all posts, optionally filtered by category
    getAllPosts: (filters = {}) => api.get('/api/posts', { params: filters }),
    // Create a new post (protected)
    createPost: (postData) => api.post('/api/posts/create', postData),
    // Get post by ID
    getPostById: (id) => api.get(`/api/posts/${id}`),
    // Get posts by tag
    getPostsByTag: (tag) => api.get(`/api/posts/tag/${tag}`),
    // Get posts by user ID
    getPostsByUser: (userId) => api.get(`/api/posts/user/${userId}`),
    // Update a post (protected)
    updatePost: (id, postData) => api.put(`/api/posts/${id}`, postData),
    // Delete a post (protected)
    deletePost: (id) => api.delete(`/api/posts/${id}`),
    // Search posts
    searchPosts: (query) => api.get(`/api/posts/search`, { params: { q: query } }),
    // Simplified category endpoints
    getGamingPosts: () => api.get('/api/posts/category=gaming'),
    getResearchPosts: () => api.get('/api/posts/category=research'),
    getDevelopmentPosts: () => api.get('/api/posts/category=development'),
    getStats: () => api.get('/api/stats'),
    
};

export default api;