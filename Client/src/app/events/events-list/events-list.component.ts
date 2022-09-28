import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'atp-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
  event = {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2036',
    time: '10:00 am',
    price: 599.99,
    location: {
      address:'1057 DT',
      city: 'London',
      country: 'England'
    } 
  }
  constructor() { }

  ngOnInit(): void {
  }

}
