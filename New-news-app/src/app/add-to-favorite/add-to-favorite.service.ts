import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AddToFavoriteService {
	url:string='http://localhost:1507';

  constructor(private http:Http) { }

  getObjects(){
  	return this.http.get(this.url+'/')
  	.map(res => res.json());
  }

  postObjects(object:any){
  	return this.http.post(this.url+'/user', object)
  	.subscribe(data => {console.log("data from post", data)});
  }
  
  deleteObjects(object:any){
    return this.http.delete(this.url+'/delete/'+object._id)
    .subscribe(data=>{console.log("updating the object",data)});

  }

  updateObjects(object:any,comment:string){
    console.log("this is service", comment);
    return this.http.put(this.url+ '/update/' +object._id,{comment})
    .subscribe(data => {console.log("data from update method", data)});

  }

}
