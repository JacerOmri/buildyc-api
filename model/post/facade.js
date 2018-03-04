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

    findById(...args) {
        return this.model
          .findById(...args)
          .populate('likes')
          .exec();
    }
}

module.exports = new PostFacade('Post', postSchema);
