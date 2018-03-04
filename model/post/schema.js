const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const postSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String },
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  likes: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});


module.exports =  postSchema;
