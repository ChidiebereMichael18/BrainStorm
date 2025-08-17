const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { registerUser, loginUser, getUser, updateUser } = require('../controllers/UserController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/:userId', protect, getUser);
router.put('/:userId', protect, updateUser);

module.exports = router;