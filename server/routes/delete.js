var express = require('express');
var userschema = require('../model/schema');
let router = express.Router();

router.delete('/:name', (err,res)=>{
	userschema.remove({name: 'chandu'}, (err,user)=>{
		if(err){
			console.log(err);
		}
		else{
			res.json(user);
			console.log(user);
		}
	});
});
module.exports = router;
