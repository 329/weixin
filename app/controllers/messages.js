var mongoose = require('mongoose'),
    Post = mongoose.model('Post');
var publicmethod = require('./public_method.js');

var findxmlbyname = function(xml,name){
	var sindex = xml.indexOf("<"+name+">");
	var eindex = xml.indexOf("</"+name+">");
	var returnstring = xml.substring(sindex+name.length+2,eindex);
	returnstring = returnstring.replace("<![CDATA[","").replace("]]>","");
	return returnstring;
};

exports.index = function(req, res) {
	console.log("sb");
	// var access_token1 = publicmethod.getaccess_token();
	var access_token1 = "ND454-9wHwrwC1yqhDZC06uh6DtOB5nZycFL-bbwjFq1DyyI1Lc5JpkyjWyMI5lCcAL1iBLDfC0wZABK5_IlGw";
	if(MsgType=='text'){
		
	}

	var post = ({
		title: 'send message to user',
		content: 'everyone listen me!',
		access_token : access_token1
	});
	res.render('messages/index', post);
  	// res.send(ToUserName+":"+FromUserName+":"+CreateTime+":"+
  	// 	MsgType+":"+MsgType+":"+Content+":"+MsgId);
}

exports.weixin_message = function(req,res){
  var bodydataXml = req.param('body');
	if(bodydataXml!=null){
		var MsgType=findxmlbyname(bodydataXml,"MsgType");
		var ToUserName=findxmlbyname(bodydataXml,"ToUserName");//开发者微信号
		if(MsgType=='text'){
			var FromUserName=findxmlbyname(bodydataXml,"FromUserName");
			console.log(ToUserName+">"+文本+">"+FromUserName);
			var CreateTime=findxmlbyname(bodydataXml,"CreateTime");
			var Content=findxmlbyname(bodydataXml,"Content");
			var MsgId=findxmlbyname(bodydataXml,"MsgId");
		}
	}
	res.send('');
}

