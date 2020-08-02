import { Component, OnInit } from '@angular/core';
import { HideShowService } from '../hide-show.service';

@Component({
  selector: 'app-advisor-detail',
  templateUrl: './advisor-detail.component.html',
  styleUrls: ['./advisor-detail.component.scss']
})
export class AdvisorDetailComponent implements OnInit {
  step = 1;
  isShow: boolean = true;
  constructor(private serviceShow: HideShowService) { }

  ngOnInit(): void {
    let header = document.getElementById("btnTab");
    let btns = header.getElementsByClassName("btn");
    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function () {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
    this.serviceShow.changeStatus(this.isShow);
  }
  ngOnDetroy() {
    this.serviceShow.changeStatus(!this.isShow);
  }

}
