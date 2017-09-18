import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//import { SeachChannelService  } from './search-channel.component';
import { SeachChannelService } from './seach-channel.service';
import { AppserviceService } from './../appservice.service';


@Component({
  selector: 'app-search-channel',
  templateUrl: './search-channel.component.html',
  styleUrls: ['./search-channel.component.css'],
  providers: [ SeachChannelService, AppserviceService ]
})
export class SearchChannelComponent implements OnInit {

   @Output() newsJson = new EventEmitter<any>();
  channelId:string[]=[];
  channelName:string[]=[];
  channels: any;
  selection: string;
  source: string;
  newsData: string;

  constructor(private seachChannelService:SeachChannelService, private appserviceService:AppserviceService) { }

  ngOnInit() {
    this.getAllChannels();
  }
  
  getChannles(){
  	console.log("hello");
   this.seachChannelService.getChannles(this.selection)
    .subscribe(data =>{this.newsData = data;
      this.sendNewsJson();}, error =>console.log(error));
  }

  getAllChannels(){
    this.appserviceService.getChannel()
    .subscribe(data=>{this.channels=data;
      console.log(data);
      this.getChannleName();
    })
  }

  getChannleName(){
    for(let i=0;i<this.channels.sources.length;i++){
      console.log(this.channels.sources[i].id);
      this.channelId.push(this.channels.sources[i].id);
      this.channelName.push(this.channels.sources[i].name);
      
    }
    console.log(this.channelId);
    console.log(this.channelName);
  }

  onSelect(name:string){
    let index = this.channelName.indexOf(name);
    this.selection = this.channelId[index];
  }

  sendNewsJson(){
    console.log("data amitted");
    this.newsJson.emit(this.newsData);
  }
}


