var mongoose = require('mongoose');
var schema = mongoose.Schema;

var headlineSchema = new schema({
  headline: {
    type: String,
    required: true
  },
  summary:{
    type: String,
    required: true
  },
  date: String,
});

var title = mongoose.model('Headline', headlineSchema);

module.exports = title;
