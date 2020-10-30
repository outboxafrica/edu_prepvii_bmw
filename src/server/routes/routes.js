const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth');
const postController = require('../controllers/postController');
const commentController = require('../controllers/commentController');



//--------------------------User-Endpoints---------------------//
router.post('/register',auth.register_post)
router.post('/login',auth.login_post)
router.get('/user',auth.validateToken,auth.user_get)

//--------------------------Post-Endpoints---------------------//
router.post('/posts',auth.validateToken,postController.post_posts)
router.get('/posts',auth.validateToken,postController.get_posts)
router.delete('/deletepost/:id',auth.validateToken,postController.delete_posts)

//--------------------------Comment-Endpoints---------------------//
router.post('/comments',auth.validateToken,commentController.post_comments)
router.get('/comments',auth.validateToken,commentController.get_comments)

module.exports = router;