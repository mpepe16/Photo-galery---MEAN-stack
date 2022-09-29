import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'atp-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.scss']
})
export class EventThumbnailComponent implements OnInit {
  @Input() event:any;
  testProperty: string = 'Using the template reference variable we are able to access the child ' 
  + 'public property using this syntax: {{thumbnail.testProperty}}';
  logFoo(){
    console.log("Foooo!");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
