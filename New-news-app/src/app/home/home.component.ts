import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


	title = 'app';
  newsJson: any;
  constructor() { }

  ngOnInit() {
  }
  
  onSendNewsJson(json){
  	this.newsJson = json;
  	console.log("appcomponent json", this.newsJson);
  }

}
