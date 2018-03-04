const Facade = require('../../lib/facade');
const postSchema = require('./schema');

class PostFacade extends Facade {
    like(post_id, user_id) {
        return this.findById(post_id)
        .then((post) => {
            post.likes.push(user_id);
            return post.save();
        })
    }
}

module.exports = new PostFacade('Post', postSchema);
