import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AppserviceService {

  constructor(private http:Http) { }

  getChannel(){
  	return this.http.get('https://newsapi.org/v1/sources')
  	.map(res => res.json());
  }

}
