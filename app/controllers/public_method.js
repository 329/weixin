var request = require('request');

var appid = "wxb48558ff958456dc";
var secret = "18a6c6b8f689a3a51cc7a5806449a02f";
var url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid="+appid+"&secret="+secret;
exports.getaccess_token = function(){
  request(url, function (error, response, body) {
    console.log("response.statusCode:"+response.statusCode);
    if (!error && response.statusCode == 200) {
      console.log(body);
    }
  });
}