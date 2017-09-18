//var express = require('express'); //var bodyParser = require('body-parser');
/*import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import user from './routes/user';
import update from './routes/update';
import Schema from './model/schema';
import config from './config/config';
import mongoose from 'mongoose';*/
var express = require('express');
var bodyParser = require('body-parser');
// server for api
var fetch = require('./routes/');
var user = require('./routes/user');
var update = require('./routes/update');
var Deletee = require('./routes/delete');
var Schema = require('./model/schema');
// server for login and signup details
let  UserSchema = require('./model/user_schema');
var get_user = require('./routes/get_user');
var post_user = require('./routes/post_user');

var config = require('./config/config');
var mongoose = require('mongoose');
var http = require('http');
var cors = require('cors');





let app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',fetch);
app.use('/user',user);
app.use('/update',update);
app.use('/delete',Deletee);
app.use('/get_user', get_user);
app.use('/post_user', post_user);

mongoose.connect(config.dburl);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'error'));
http.createServer(app).listen(1507, '127.0.0.1');
console.log('Server running....');

