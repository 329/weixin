var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: {type : String, default : '', trim : true},
  content: {type : String, default : '', trim : true},
  createdAt  : {type : Date, default : Date.now}
})


mongoose.model('Post', PostSchema);
