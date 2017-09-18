

let express = require('express');
let  UserDetails = require('../model/user_schema');
let router = express.Router();



router.post('/', (req, res, next) => {
	var addUser = new UserDetails();
	addUser.UserName = req.body.UserName;
	addUser.email_id = req.body.email_id;
	addUser.password = req.body.password;
	addUser.confirm_password = req.body.confirm_password;

	 addUser.save((err, user_detail) => {
	 	if(err){
	 		console.log(err);
	 	}
	 	else{
	 		res.send(user_detail);
	 	}
	 });
});

module.exports = router;
