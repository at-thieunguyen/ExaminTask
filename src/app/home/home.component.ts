import { Component, OnInit } from '@angular/core';
import { HideShowService } from '../hide-show.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isShowHome: boolean = false;
  constructor(private serviceShow: HideShowService) { }

  ngOnInit(): void {
    this.serviceShow.changeStatus(this.isShowHome);
  }

  ngOnDetroy() {
    this.serviceShow.changeStatus(!this.isShowHome);
  }

}
