//var express = require('express');
/*import express from 'express';
import userschema from '../model/schema';*/
var express = require('express');
var userschema = require('../model/schema');
let router = express.Router();

/*router.get('/',(req,res)=>{
	res.send('hello');
})*/

router.post('/', (req, res)=>{
	let myobj = new userschema({
		title :req.body.title,
		description : req.body.description,
		url : req.body.url,
		urlToImage : req.body.urlToImage,
		publishedAt : req.body.publishedAt
	});
	
	//console.log(myobj)
	myobj.save((err,result)=>{
		if(err){
			//console.log('error')
			res.send(myobj);
			
		}
		else{
			res.send(result);
		}
	});

});
//export default router;
module.exports = router;