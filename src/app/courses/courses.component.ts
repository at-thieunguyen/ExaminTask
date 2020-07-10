import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  slides = [
    {
      avt: './assets/images/advisor1.jpg',
      img: './assets/images/courses1.jpg',
      name: 'MUNIL DRUVA',
      title: 'Covers Big Data analysis',
      price: 'Free'
    },
    {
      avt: './assets/images/avtteam1.jpg',
      img: './assets/images/slideItem2.jpg',
      name: 'AKUA PAUL',
      title: 'professional web development',
      price: '$12.00'
    },
    {
      avt: './assets/images/avtteam2.jpg',
      img: './assets/images/slideItem3.jpg',
      name: 'JON BABU',
      title: 'Java Programming Masterclass',
      price: 'Free'
    },
    {
      avt: './assets/images/advisor2.jpg',
      img: './assets/images/slideItem4.jpg',
      name: 'BABU PAOL',
      title: 'Stanford Engineering',
      price: '$124.00'
    },
    {
      avt: './assets/images/advisor3.jpg',
      img: './assets/images/slideItem5.jpg',
      name: 'MICKEL CLARK',
      title: 'Stanford Engineering',
      price: '$12.00'
    },
    {
      avt: './assets/images/advisor4.jpg',
      img: './assets/images/courses2.jpg',
      name: 'ROBERT HENRY',
      title: 'Stanford Engineering',
      price: '$12.00'
    },
  ];

}
