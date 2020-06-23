import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-courses',
  templateUrl: './popular-courses.component.html',
  styleUrls: ['./popular-courses.component.scss']
})
export class PopularCoursesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  slides = [
    {
      img: './assets/images/slideItem1.jpg',
      name: 'Jonathom Kiyam',
      title: 'Covers Big Data analysis',
    },
    {
      img: './assets/images/slideItem2.jpg',
      name: 'Huma Park',
      title: 'professional web development',
    },
    {
      img: './assets/images/slideItem3.jpg',
      name: 'Prokash Timer',
      title: 'Java Programming Masterclass'
    },
    {
      img: './assets/images/slideItem4.jpg',
      name: 'Munil Druva',
      title: 'Stanford Engineering',
    },
    {
      img: './assets/images/slideItem5.jpg',
      name: 'Akua Paul',
      title: 'Stanford Engineering',
    },
  ];
  slideConfig = {
    'slidesToShow': 3,
    'slidesToScroll': 1,
    'dots': true,
    'infinite': true,
    'autoplay': false,
    // 'autoplaySpeed': 10000,
  };

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }

}
