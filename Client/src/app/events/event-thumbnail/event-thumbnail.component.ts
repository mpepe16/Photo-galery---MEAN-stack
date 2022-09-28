import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'atp-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.scss']
})
export class EventThumbnailComponent implements OnInit {
  @Input() event:any;
  @Output() eventClick = new EventEmitter();
  handleClickMe(){
    this.eventClick.emit('Here is an output data');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
