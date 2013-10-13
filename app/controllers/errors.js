/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    async = require('async'),
    Error = mongoose.model('Error'),
    _ = require('underscore');


/**
 * Find article by id
 */
exports.article = function(req, res, next, id) {
    id = id.split('-')[0];
    Article.load(id, function(err, article) {
        if (err) return next(err);
        if (!article) return next(new Error('Failed to load article ' + id));
        req.article = article;
        next();
    });
};

/**
 * Create an error 
 */
exports.create = function(req, res) {            
    //console.log(req);
    var error = new Error(req.body);

    //TODO look up company by app id
    //error.company = req.company;

    error.userAgent = req.headers['user-agent'];
    //error.ipAddress

    error.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                error: error 
            });
        } 
        else {
            res.jsonp(error);
        }
    });
};

/**
 * Delete an article
 */
exports.destroy = function(req, res) {
    var error = req.error;

    error.remove(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(error);
        }
    });
};

/**
 * Show an article
 */
exports.show = function(req, res) {
    res.jsonp(req.error);
};

/**
 * List of Articles
 */
exports.all = function(req, res) {
    Error.find().exec(function(err, errors) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(errors);
        }
    });
};
