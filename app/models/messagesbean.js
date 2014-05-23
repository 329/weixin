var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MessageSchema = new Schema({
  MsgType: {type : String, default : '', trim : true},
  ToUserName: {type : String, default : '', trim : true},
  FromUserName: {type : String, default : '', trim : true},
  Content: {type : String, default : '', trim : true},
  MsgId: {type : String, default : '', trim : true},
  CreateTime  : {type : Date, default : Date.now}
})


mongoose.model('Messagebean', MessageSchema);
