import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class SeachChannelService {

	
	//channelUrl: string = ""
  constructor(private http:Http) { }
  ngOnInit():void{


	}
  getChannles(source: string){
		return this.http.get('https://newsapi.org/v1/articles?source='+source+'&apiKey=9581953f36614c4393ae4a79d8179a49')
		.map(res=> res.json());
	}

	

}
