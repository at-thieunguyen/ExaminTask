import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Item } from './item.model';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(public firestore: AngularFirestore) { }

  getPolicies() {
    return this.firestore.collection('users').snapshotChanges();
}
}
