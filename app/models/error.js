/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    _ = require('underscore');


/**
 * Error Schema
 */
var ErrorSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    url: {
        type: String,
        default: '',
        trim: true
    },
    message: {
        type: String,
        default: '',
        trim: true
    },
    lineNumber: {
        type: Number,
        default: 0
    },
    ipAddress: {
        type: String,
        default: '0.0.0.0',
        trim: true
    },
    userAgent: {
        type: String,
        default: '',
        trim: true
    }
    /*,
    company: {
        type: Schema.ObjectId,
        ref: 'Company'
    } */
});

mongoose.model('Error', ErrorSchema);