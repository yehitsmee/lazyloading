import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class GuardService {
  private IsLoggedIn: boolean = false;
  private subject = new Subject<any>();

  constructor() {}
  toggleLogin() {
    this.IsLoggedIn = !this.IsLoggedIn;
    this.subject.next(this.IsLoggedIn);
  }
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
  loggedIn() {
    if (this.IsLoggedIn) {
      return true;
    } else {
      return false;
    }
  }
}
