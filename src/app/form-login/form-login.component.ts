import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import { LoginServiceService } from '../login-service.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})

export class FormLoginComponent implements OnInit {
  email: string;
  password: string;
  userLogin: any;
  dataUser: any;
  user: any;
  error: boolean = true;
  loginForm: FormGroup;
  loginSuccess: boolean = false;
  constructor(private fb: FormBuilder,
    public db: AngularFireDatabase,
    private loginService: LoginServiceService,
    public dialogRef: MatDialogRef<FormLoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.db.list('users').valueChanges().subscribe((data) => {
      this.dataUser = data;
    })
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
    });
  }
  onLogin() {
    // this.userLogin = {
    //   email: this.loginForm.value.email,
    //   password: this.loginForm.value.password,
    // };
    for (let i = 0; i < this.dataUser.length; i++) {
      if (
        this.dataUser[i].email === this.loginForm.value.email &&
        this.dataUser[i].passWord === this.loginForm.value.password) {
        localStorage.setItem("userLogin", JSON.stringify(this.dataUser[i]));
        this.dialogRef.close('no');
        let status = true;
        this.loginService.changeStatus(status);
      } else {
        this.error = false;
      }
    }
  }
  closeDialog() {
    this.dialogRef.close('no')
  }
}
