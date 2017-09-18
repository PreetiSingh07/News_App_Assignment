let express = require('express');
let userschema = require('../model/schema');
let router = express.Router();


router.get('/', (req, res,next)=>{
	userschema.find({}, (err, user)=>{
		if(err){
			console.log(err);
		}
		else{
			res.send(user);
		}
	});
});

module.exports = router;