import { Component, OnInit } from '@angular/core';
import { HideShowService } from '../hide-show.service';
import { FormRegisterComponent } from '../form-register/form-register.component';
import { MatDialog } from '@angular/material/dialog';
import { FormLoginComponent } from '../form-login/form-login.component';
import { CommonService } from '../common.service';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  constructor(
    private serviceShow: HideShowService,
    public dialog: MatDialog,
    private commonservice: CommonService,
    private loginservice: LoginServiceService) { }


  showInputSearch: boolean = false;
  showMenuSide: boolean = false;
  showHeader: boolean = false;
  showRegister: boolean = true;
  isLogin: boolean;
  isHome: boolean = false;
  login: any;
  curentEmail: any;
  ngOnInit(): void {
    this.serviceShow.currentStatus.subscribe(data => {
      this.showHeader = data;
    });
    this.commonservice.headerStatus.subscribe(status => {
      this.showHeader = status;
    })

    this.loginservice.curentStatus.subscribe(data => {
      this.isLogin = data

    })
    // subscribe change email when login      
    this.loginservice.currentName.subscribe(data => {
      this.login = data;
      console.log(this.login);
      
      this.curentEmail = JSON.parse(localStorage.getItem('userLogin'));
      console.log(this.curentEmail);
      
      
    })
  }
  showFormRegister() {
    // this.showRegister = this.dialogService.showFormRegister;
    this.dialog.open(FormRegisterComponent, {});
  }
  showFormLogin() {
    this.dialog.open(FormLoginComponent, {});
  }
  logOut() {
    let status = false;
    this.loginservice.changeStatus(status);
    localStorage.removeItem('userLogin');
  }
}
