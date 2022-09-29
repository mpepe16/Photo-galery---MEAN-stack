import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'atp-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.scss']
})
export class EventThumbnailComponent implements OnInit {
  @Input() event:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
