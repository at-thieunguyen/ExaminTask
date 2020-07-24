import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advisor',
  templateUrl: './advisor.component.html',
  styleUrls: ['./advisor.component.scss']
})
export class AdvisorComponent implements OnInit {

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
  clientLogoCarousel = [
    {
      img: './assets/images/logoitem1.png'
    },
    {
      img: './assets/images/logoitem2.png'
    },
    {
      img: './assets/images/logoitem3.png'
    },
    {
      img: './assets/images/logoitem4.png'
    },
    {
      img: './assets/images/logoitem5.png'
    },
  ]
  slideConfig = {
    'slidesToShow': 3,
    'slidesToScroll': 1,
    'dots': false,
    'infinite': true,
    'autoplay': false,
    'autoplaySpeed': 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
}
