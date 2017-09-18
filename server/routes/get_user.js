var express = require('express');
let  UserDetails = require('../model/user_schema');
let router = express.Router();

router.get('/:username/:password', (req, res,next)=>{
	UserDetails.find({}, (err, userresult)=>{
		if(err){
			console.log(err);
		}
		else{
			res.send(userresult);
		}
	});
});


/*router.post('/', (req, res) => {
	let email_id = req.body.email_id;
	let password = req.body.password;
	UserDetails.find({email_id : email_id , password : password})
	.give((err, result) => {
		if(err){
			res.send(err);
		}
		else{
			res.json(userresult);
		}
	})

})*/

module.exports = router;

