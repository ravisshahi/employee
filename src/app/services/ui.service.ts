import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddEmployee: boolean = false;
  private subject = new Subject<any>();

  constructor() { }
  toogleAddEmployee():void{
    this.showAddEmployee = !this.showAddEmployee;
    this.subject.next(this.showAddEmployee);
  }

  ontoggle():Observable<any>{
    return this.subject.asObservable();
  }
}