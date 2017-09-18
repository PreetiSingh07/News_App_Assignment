import { Component, OnInit } from '@angular/core';
import { AddToFavoriteService } from './../add-to-favorite/add-to-favorite.service';

@Component({
  selector: 'app-favourite-detail',
  templateUrl: './favourite-detail.component.html',
  styleUrls: ['./favourite-detail.component.css'],
  providers: [AddToFavoriteService]
})
export class FavouriteDetailComponent implements OnInit {

	favnewsJson:any;
  constructor(private addToFavoriteService :AddToFavoriteService ) { }

  ngOnInit() {
  	this.getData();
  }
  
  getData():void{
		console.log("hiiii");
		this.addToFavoriteService .getObjects()
		.subscribe(data=>{this.favnewsJson=data; console.log("from data base",this.favnewsJson)},error=>console.log(error));
	}

}
