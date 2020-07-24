import { Component, OnInit } from '@angular/core';
import { HideShowService } from '../hide-show.service';
import { FormRegisterComponent } from '../form-register/form-register.component';
import { DialogService } from '../dialog.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormLoginComponent } from '../form-login/form-login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private serviceShow: HideShowService,
   
    private dialogService: DialogService,
    public dialog: MatDialog,) { }
  
  
    showInputSearch: boolean = false;
  showMenuSide: boolean = false;
  showHeader: boolean = false;
  showRegister: boolean = true;
  ngOnInit(): void {
    this.serviceShow.currentStatus.subscribe(data => {
      this.showHeader = data;
    })
  }
  showFormRegister() {
    // this.showRegister = this.dialogService.showFormRegister;
    this.dialog.open(FormRegisterComponent, {});
  }
  showFormLogin() {
    this.dialog.open(FormLoginComponent, {});
  }

}
