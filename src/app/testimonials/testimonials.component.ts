import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  slideConfig = {
    'slidesToShow': 2,
    'slidesToScroll': 1,
    'infinite': true,
    'autoplay': true,
    'autoplaySpeed': 1500,
    responsive: [
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
  slides = [
    {
      img: './assets/images/review1.jpg',
      name: 'Druna Patia',
      position: 'Biology Student'
    },
    {
      img: './assets/images/review2.jpg',
      name: 'Astron Brun',
      position: 'Science Student'
    },
    {
      img: './assets/images/review3.jpg',
      name: 'Paol Druva',
      position: 'Development Student'
    },
    {
      img: './assets/images/review4.jpg',
      name: 'Druna Patia',
      position: 'Biology Student'
    }
  ]
}
