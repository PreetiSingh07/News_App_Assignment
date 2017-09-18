import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SignUpService {

	url:string='http://localhost:1507';

  constructor(private http:Http) { }

 
  loginUsers(){
 	return this.http.get(this.url+'/get_user/:username/:password')
 	.map(res => res.json());
  }

  postUsers(object:any){
  	return this.http.post(this.url+'/post_user', object );
  	//.subscribe(data => {console.log("users data", data)});

  }

  

}
