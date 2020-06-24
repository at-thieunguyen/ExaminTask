import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-advisors',
  templateUrl: './experience-advisors.component.html',
  styleUrls: ['./experience-advisors.component.scss']
})
export class ExperienceAdvisorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  slides = [
    {
      img: './assets/images/advisor1.jpg',
      name: 'Professon. Nuri Paul'
    },
    {
      img: './assets/images/advisor2.jpg',
      name: 'HMonayem Pruda'
    },
    {
      img: './assets/images/advisor3.jpg',
      name: 'Prokash Timer'
    },
    {
      img: './assets/images/advisor4.jpg',
      name: 'Munil Druva'
    },
    {
      img: './assets/images/advisor5.jpg',
      name: 'Akua Paul'
    },
  ];
  slideConfig = {
    'slidesToShow': 3,
    'slidesToScroll': 1,
    'dots': true,
    'infinite': true,
    'autoplay': true,
    'autoplaySpeed': 1500
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
