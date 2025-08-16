const express = require('express');
const router = express.Router();
const { 
    registerUser, 
    loginUser,
    getUser,
    updateUser 
} = require('../controllers/UserController');
const { protect } = require('../middleware/authMiddleware');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/:id', getUser);
router.put('/:id', protect, updateUser);

module.exports = router;
