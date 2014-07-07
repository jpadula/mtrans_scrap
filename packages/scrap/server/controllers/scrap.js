'use strict';

var scrap = require('scrap');

exports.scrapWebsite = function(req, res) {
	var url = req.body.url;
	

   	scrap(url,function(err,$) {

   		if (!err) {
   			res.jsonp($('span, p').text().trim());
   		} else {
   			res.send(500,'Is not possible scrape this page');
   		}
   	});

};