import { Component, OnInit } from '@angular/core';
import { SignUpService } from './sign-up.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [SignUpService]
})
export class SignUpComponent implements OnInit {


	 	UserName        : string;
        email_id        : string;
        password        : string;
        confirm_password: string;

  constructor(private signUpService:SignUpService, private router:Router) { }

  ngOnInit() {
  }

  postUser(){
	if((this.UserName = undefined) || (this.email_id = undefined) || (this.password = undefined) || (this.confirm_password = undefined)){
		alert("fields can't be empty");
	}

	else if(this.confirm_password != this.password){
		alert("enter correct password");
		window.location.reload();
	}

	else {
		this.signUpService.postUsers({UserName: this.UserName, email_id:this.email_id, password: this.password, confirm_password:this.confirm_password})
		.subscribe(data => {console.log("added",data);
			alert("added successfully");
			this.router.navigate(['/home']);
	})
	}
}

}




