import { Component, OnInit, Input } from '@angular/core';
import { AddToFavoriteService } from './add-to-favorite.service';

@Component({
  selector: 'app-add-to-favorite',
  templateUrl: './add-to-favorite.component.html',
  styleUrls: ['./add-to-favorite.component.css'],
  providers: [AddToFavoriteService]
})
export class AddToFavoriteComponent implements OnInit {

  @Input("object") object:any;
	//favnewsJson: string;
  comment: string;
  constructor(private addToFavoriteService:AddToFavoriteService) { console.log("objecrt recieved",this.object);}

  ngOnInit() {
    
  }
  // getData(){
  // 	this.addToFavoriteService.getObjects()
  // 	.subscribe(data => {this.favnewsJson=data;
  // 		console.log("from data base", this.favnewsJson)}, error => console.log(error));
  // }

  deleteObject(obj:any){
    console.log("deleted");
    this.addToFavoriteService.deleteObjects(obj);
  }

  addComments(obj:any){
    console.log("comments",this.comment);
    this.addToFavoriteService.updateObjects(obj,this.comment);
  }

}
