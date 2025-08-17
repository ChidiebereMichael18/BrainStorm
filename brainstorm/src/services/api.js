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
    login: (credentials) => api.post('/api/users/login', credentials),
    register: (userData) => api.post('/api/users/register', userData),
};

export const postsAPI = {
    getAllPosts: (filters = {}) => api.get('/api/posts', { params: filters }),
    createPost: (postData) => api.post('/api/posts/create', postData), // updated from /posts/create
    getPostsByCategory: (category) => api.get(`/posts?category=${category}`),
    getPostsByTag: (tag) => api.get(`/posts/tag/${tag}`),
    getPostsByUser: (userId) => api.get(`/api/posts/users/${userId}`),
    getPostById: (id) => api.get(`/api/posts/${id}`),
    updatePost: (id, postData) => api.put(`/api/posts/${id}`, postData),
    deletePost: (id) => api.delete(`/api/posts/${id}`),
    searchPosts: (query) => api.get(`/posts/search?q=${query}`),
    
    // Simplified category endpoints that use getPostsByCategory internally
    getGamingPosts: () => api.get('/api/posts?category=gaming'),
    getResearchPosts: () => api.get('/api/posts?category=research'),
    getDevelopmentPosts: () => api.get('/api/posts?category=development'),
};

export default api;
