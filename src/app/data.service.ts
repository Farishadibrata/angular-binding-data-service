import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  Data : Object = {Data : 'Hai'}
  DataSubject : BehaviorSubject<Object> = new BehaviorSubject<Object>({Data : 'Hai'})
  constructor() { }

  setData(value){
    this.Data = {Data : value}
    this.DataSubject.next(this.Data)
  }
}
