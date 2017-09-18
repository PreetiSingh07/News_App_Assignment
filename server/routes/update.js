/*import express from 'express';
import userschema from '../model/schema';*/
var express = require('express');
var userschema = require('../model/schema');
let router = express.Router();
router.put('/:name', (req, res)=>{
	userschema.update({name:req.body.name},{$set:{username:req.body.username}}, (err,user)=>{
		if(err){
			console.log('err');
		}
		else{
			res.json(user);
		}
	});
});
module.exports = router;