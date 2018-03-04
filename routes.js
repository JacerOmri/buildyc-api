const Router = require('express').Router;
const router = new Router();

const user = require('./model/user/router');
const post = require('./model/post/router');
const comment = require('./model/comment/router');

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to buildyc API!' });
});

router.use('/user', user);
router.use('/post', post);
router.use('/comment', comment);

module.exports = router;
