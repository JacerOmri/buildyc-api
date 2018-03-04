const Controller = require('../../lib/controller');
const commentFacade = require('./facade');

class CommentController extends Controller {}

module.exports = new CommentController(commentFacade);
