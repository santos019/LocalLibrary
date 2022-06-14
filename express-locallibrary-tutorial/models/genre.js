const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GenreSchema = new Schema(
  {
    name: {type: String, required: true, maxLength: 100, minlength: 3},
  }
);

// Virtual for bookinstance's URL
GenreSchema
.virtual('url')
.get(function () {
  return '/catalog/Genre/' + this._id;
});

//Export model
module.exports = mongoose.model('Genre', GenreSchema);
