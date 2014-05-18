var express = require('express');
var mongodb = require("mongodb");
var server = new mongodb.Server('localhost',27017,{auto_reconnect:true});
var db = new mongodb.Db("weixin",server);

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
	var bodydataXml = req.param('body');
	var MsgType=findxmlbyname(bodydataXml,"MsgType");
	var ToUserName=findxmlbyname(bodydataXml,"ToUserName");
	var FromUserName=findxmlbyname(bodydataXml,"FromUserName");
	var CreateTime=findxmlbyname(bodydataXml,"CreateTime");
	var Content=findxmlbyname(bodydataXml,"Content");
	var MsgId=findxmlbyname(bodydataXml,"MsgId");

	if(MsgType=='text'){
		
	}


  	res.send(ToUserName+":"+FromUserName+":"+CreateTime+":"+
  		MsgType+":"+MsgType+":"+Content+":"+MsgId);
});



var findxmlbyname = function(xml,name){
	var sindex = xml.indexOf("<"+name+">");
	var eindex = xml.indexOf("</"+name+">");
	var returnstring = xml.substring(sindex+name.length+2,eindex);
	returnstring = returnstring.replace("<![CDATA[","").replace("]]>","");
	return returnstring;
};

module.exports = router;