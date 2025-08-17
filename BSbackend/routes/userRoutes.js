const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { registerUser, loginUser, getUser, updateUser } = require('../controllers/UserController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getUser); // Add this route for getting current user
router.put('/me', protect, updateUser); // Add this route for updating current user

module.exports = router;