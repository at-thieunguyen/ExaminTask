import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  veticals = [
    {
      img: './assets/images/event2.jpg',
      title: 'Social Science & Humanities'
    },
    {
      img: './assets/images/event3.jpg',
      title: 'Actualized Leadership Network Seminar'
    },
  ]
}
