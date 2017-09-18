import { Component, OnInit, Input } from '@angular/core';
import { SeachChannelService } from './../search-channel/seach-channel.service';
import { AddToFavoriteService } from './../add-to-favorite/add-to-favorite.service';


@Component({
  selector: 'app-show-news-list',
  templateUrl: './show-news-list.component.html',
  styleUrls: ['./show-news-list.component.css'],
  providers: [SeachChannelService, AddToFavoriteService ]
})
export class ShowNewsListComponent {
	@Input('object') object:any;
  allObject:any;
  constructor(private seachChannelService:SeachChannelService, private addToFavoriteService:AddToFavoriteService) { }

postObject(o:any){
    let temp;
    this.addToFavoriteService.getObjects().subscribe(data=>{
      console.log("comparison",data);
      this.allObject=data;
       temp=this.allObject.filter((item)=>{item.url===o.url});
      console.log("this is twmp array",temp);
      // if(temp.length>=1)
      // alert("already exist in favourites");
      // else
      this.addToFavoriteService.postObjects(o);
      
    });



  } 
}



