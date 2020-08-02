import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  showHeader = new BehaviorSubject<any>(false)

  headerStatus = this.showHeader.asObservable();

  changeStatusHeader(status: boolean) {
    this.showHeader.next(status);
  }
  constructor() { }
}
