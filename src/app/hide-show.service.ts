import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HideShowService {
  
  isShow = new BehaviorSubject<boolean>(false);
  currentStatus = this.isShow.asObservable();

  changeStatus(status: boolean){
    this.isShow.next(status);
  }
  constructor() { }


}
