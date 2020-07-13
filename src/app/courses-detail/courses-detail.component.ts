import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrls: ['./courses-detail.component.scss']
})
export class CoursesDetailComponent implements OnInit {

  constructor() { }
  showProgramJava: boolean = false;
  showProgramPhp: boolean = false;
  step = 1;

  ngOnInit(): void {
  }
  items = [
    {
      name: 'Devid Mark',
      img: './assets/images/review4.jpg',
      position: 'senior lecturer',
      des: 'Several carried through an of up attempt gravity. Situation to be at offending elsewhere distrusts if. Particular use for considered projection cultivated. Worth of do doubt shall',
      imgPost: './assets/images/slideItem1.jpg',
    },
    {
      name: 'Andolin Paul',
      img: './assets/images/avtteam1.jpg',
      position: 'Java Developer',
      des: 'Several carried through an of up attempt gravity. Situation to be at offending elsewhere distrusts if. Particular use for considered projection cultivated. Worth of do doubt shall',
      imgPost: './assets/images/slideItem2.jpg',
    },
  ]
}
