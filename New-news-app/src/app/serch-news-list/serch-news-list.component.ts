import { Component, OnInit, Input } from '@angular/core';
import { SeachChannelService } from './../search-channel/seach-channel.service';

@Component({
  selector: 'app-serch-news-list',
  templateUrl: './serch-news-list.component.html',
  styleUrls: ['./serch-news-list.component.css'],
  providers:[SeachChannelService]
})
export class SerchNewsListComponent implements OnInit {

	@Input('newsJson') newsJsonRec:any;
  constructor(private seachChannelService:SeachChannelService) { }

  ngOnInit() {
  }

}
