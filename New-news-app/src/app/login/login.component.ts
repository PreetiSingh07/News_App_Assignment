import { Component, OnInit } from '@angular/core';
import { SignUpService } from './../sign-up/sign-up.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [SignUpService]

})
export class LoginComponent implements OnInit {

	 email_id :string;
	 password: string;
	 responseData : string;


  constructor(private signUpService:SignUpService, private router:Router) { }

  ngOnInit() {
  }

  /*loginUser(){
  	if(this.email_id == undefined || this.password == undefined){
  		alert("please enter email id and password");
  	}

  	this.signUpService.loginUsers({email_id: this.email_id, password: this.password})
  		.subscribe(data => {this.responseData=data;
  			console.log(this.responseData.length==0){

  			}
  		}
  			
  		}
  	else{
  		
  	  }
  */

  loginUser() {
  	if(this.email_id == undefined || this.password == undefined){
  		alert("please enter email id and password");
  	}

  	this.signUpService.loginUsers()
  	.subscribe(data => {this.responseData = data;
  		console.log(this.responseData);
  		if(this.responseData.length==0){
  			alert("wrong credentials");
  			window.location.reload();
  		}
  		else{
  			this.router.navigate(['./search']);
  		}
  	});
  	
  }

}




