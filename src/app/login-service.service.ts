import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  isLogin = new BehaviorSubject<boolean>(this.local() ? true : false);
  curentStatus = this.isLogin.asObservable();
  constructor() { }

  local() {
    return JSON.parse(localStorage.getItem('userLogin'));
  }
  changeStatus(status: boolean) {
    this.isLogin.next(status);
  }

  user = new BehaviorSubject<any>(this.local() ? true : false);
  currentName = this.user.asObservable();
  changeUser(user: any) {
    this.user.next(user);
  }
}
