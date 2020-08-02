import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormLoginComponent } from '../form-login/form-login.component';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {
  email: string;
  userName: string;
  password: string;
  repeatPassword: string
  user: any;
  error: boolean = true;
  success: boolean = false;
  invalidE: boolean = false;
  invalidP: boolean = false;
  dataUser: any;
  formRegister: FormGroup;
  items: Observable<any>;

  constructor(private fb: FormBuilder,
    private router: Router,
    public db: AngularFireDatabase,
    public dialogRef: MatDialogRef<FormRegisterComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.db.list('users').valueChanges().subscribe((data) => {
      this.dataUser = data;
    })
  }
  ngOnInit(): void {
    this.formRegister = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      userName: ["", [Validators.required, Validators.minLength(2)]],
      passWord: ["", [Validators.required, Validators.minLength(6)]],
      repeatPassword: ["", [Validators.required, Validators.minLength(6)]],
    }),
    {
      validators: this.matchPasswords
    }
  }
  matchPasswords(group: FormGroup) {
    let password = group.get('passWord').value;
    let repeatPassword = group.get('repeatPassword').value;
    return password === repeatPassword ? null : { notSame: true }
  }
  onRegister() {
    this.user = {
      email: this.formRegister.value.email,
      userName: this.formRegister.value.userName,
      password: this.formRegister.value.passWord,
      repeatPassword: this.formRegister.value.repeatPassword
    };
    this.db.list('users').push(this.user);
    setTimeout(() => {
      this.dialogRef.close('no');
      this.dialog.open(FormLoginComponent, {});
    }, 1500);
    this.success = true;
    setTimeout(() => {
      return (this.success = false);
    }, 1000);
    // for (let i = 0; i < this.dataUser.length; i++) {
    //   if (this.dataUser[i].email === this.formRegister.value.email) {
    //     isValidE = false;
    //     break;
    //   } else {
    //     isValidE = true;
    //   }
    // const indexMail = this.dataUser.findIndex(x => x.email = this.user.email);
    // if (indexMail > 0) {
    //   isValidE = true;
    // } else {
    //   isValidE = false;
    // }

    // if (
    //   this.formRegister.value.passWord ===
    //   this.formRegister.value.repeatPassword
    // ) {
    //   isValidP = true;
    //   this.invalidP = false;
    // } else {
    //   isValidP = false;
    //   this.invalidP = true;
    // }
  }
  closeDialog() {
    this.dialogRef.close('no')
  }
}
