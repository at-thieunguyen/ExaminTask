import { Component, OnInit } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-slideenroll',
  templateUrl: './slideenroll.component.html',
  styleUrls: ['./slideenroll.component.scss']
})
export class SlideenrollComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  slides = [
    {
      img: './assets/images/slide4.jpg',
      title: 'Codecademy software programming',
    },
    {
      img: './assets/images/slide5.jpg',
      title: 'Data analysis and data science',
    },
    {
      img: './assets/images/slide6.jpg',
      title: 'Graphic and interactive design'
    }
  ];
  slideConfig = {
    'slidesToShow': 4,
    'slidesToScroll': 1,
    'infinite': true,
    'autoplay': true,
    'autoplaySpeed': 1500,
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
