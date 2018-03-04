const Controller = require('../../lib/controller');
const postFacade = require('./facade');

class PostController extends Controller {
    like(req, res, next) {
        this.facade.like(req.params.id, req.body.user_id)
          .then((result) => {
            if (result < 1) { return res.sendStatus(304); }
            res.sendStatus(204);
          })
          .catch(err => next(err));
      }
}

module.exports = new PostController(postFacade);
