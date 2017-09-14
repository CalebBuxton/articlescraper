var mongoose = require('mongoose');

var schema = mongoose.Schema;
var noteSchema = new schema({
  _headlineId: {
      type: schema.Types.ObjectId,
      ref: 'Headline'
  },
  date: String,
  text: String
});

var Note = mongoose.model('Note', noteSchema);
module.exports = Note;
