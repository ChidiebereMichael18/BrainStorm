import axios from 'axios';

const api = axios.create({
    baseURL: 'https://brainstorm-r7xb.onrender.com',
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
    register: (userData) => api.post('/api/users/register', userData),
    login: (credentials) => api.post('/api/users/login', credentials),
    getUser: () => api.get('/api/users/me'),
    // updateUser: (userData) => api.put('/api/users/me'),
    updateUser: (userData) => api.put('/api/users/me', userData, {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
}),
    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
    }
};

export const postsAPI = {
    getAllPosts: (filters = {}) => api.get('/api/posts', { params: filters }),
    createPost: (postData) => api.post('/api/posts/create', postData),
    getPostsByCategory: (category) => api.get(`/api/posts/category/${category}`),
    getPostsByTag: (tag) => api.get(`/api/posts/tag/${tag}`),
    getPostsByUser: (userId) => api.get(`/api/posts/user/${userId}`),
    getPostById: (id) => api.get(`/api/posts/${id}`),
    updatePost: (id, postData) => api.put(`/api/posts/${id}`, postData),
    deletePost: (id) => api.delete(`/api/posts/${id}`),
    searchPosts: (query) => api.get(`/api/posts/search?q=${query}`),
    getGamingPosts: () => api.get('/api/posts/category/gaming'),
    getResearchPosts: () => api.get('/api/posts/category/research'),
    getDevelopmentPosts: () => api.get('/api/posts/category/development'),
    getStats: () => api.get('/api/stats'),
};

export default api;