import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService, API_DOMAIN } from '../api.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {
  email: string;
  passWord: string;
  repeatPassword: string;
  user: any;
  invalidE: boolean = false;
  invalidP: boolean = false;
  formRegister: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,
    private apiService: ApiService) { }


  ngOnInit(): void {
    this.formRegister = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      userName: ["", [Validators.required, Validators.minLength(2)]],
      passWord: ["", [Validators.required, Validators.minLength(6)]],
      repeatPassword: ["", [Validators.required, Validators.minLength(6)]],
    })
  }

  onRegister() {
    this.user = {
      email: this.formRegister.value.email,
      userName: this.formRegister.value.userName,
      passWord: this.formRegister.value.passWord,
      repeatPassword: this.formRegister.value.repeatPassword
    };
    let isValidEmail: boolean = false;
    let isValidPass: boolean = false;
    this.apiService.get('users', '').subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].email === this.formRegister.value.email) {
          isValidEmail = false;
          this.invalidE = true
          break;
        } else {
          isValidEmail = true;
        }
      }
      if (isValidEmail && isValidPass) {
        this.apiService.post('users', this.user);
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 1000);
      }
    })
  }



}
