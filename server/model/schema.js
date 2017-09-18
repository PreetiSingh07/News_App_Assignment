//import mongoose from 'mongoose';
var mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
	title : String,
	description: String, 
	url: String,
	urlToImage: String,
	publishedAt: String
});
//let data = mongoose.model('chandu', userSchema);

//export default data; 
//module.exports = data;
module.exports = mongoose.model('chandu', userSchema);