/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    async = require('async'),
    _ = require('underscore');


exports.render = function(req, res) {
    res.render('index', {
        user: req.user ? JSON.stringify(req.user) : "null"
    });
};

exports.log = function(req, res) {

	console.log(req.body);
	console.log(req.query);
	
	res.writeHead(200, {
  		'Content-Length': 0,
  		'Content-Type': 'text/plain' });
	res.end();
}