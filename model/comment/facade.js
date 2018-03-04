const Facade = require('../../lib/facade');
const commentSchema = require('./schema');

class CommentFacade extends Facade {}

module.exports = new CommentFacade('Comment', commentSchema);
