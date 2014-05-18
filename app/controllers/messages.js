var findxmlbyname = function(xml,name){
	var sindex = xml.indexOf("<"+name+">");
	var eindex = xml.indexOf("</"+name+">");
	var returnstring = xml.substring(sindex+name.length+2,eindex);
	returnstring = returnstring.replace("<![CDATA[","").replace("]]>","");
	return returnstring;
};

exports.index = function(req, res) {
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
}


