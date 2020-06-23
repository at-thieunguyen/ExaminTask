import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  slideConfig = {
    'slidesToShow': 3,
    'slidesToScroll': 1,
    'infinite': true,
    'autoplay': true,
    'autoplaySpeed': 1500
  };
  blogs = [
    {
      img: './assets/images/blog1.jpg',
      title:'Objection happiness something'
    },
    {
      img: './assets/images/blog2.jpg',
      title:'Meant to learn of vexed'
    },
    {
      img: './assets/images/blog3.jpg',
      title:'Delightful up dissimilar'
    }
  ]
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
}
