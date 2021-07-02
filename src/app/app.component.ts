import { Component, VERSION } from '@angular/core';
import { Subscription } from 'rxjs';
import { GuardService } from './guard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userLoggedIn: boolean = false;
  subscription: Subscription;
  constructor(private guardService: GuardService, private router: Router) {
    this.subscription = this.guardService
      .onToggle()
      .subscribe(val => (this.userLoggedIn = val));
  }
  toggleLogin() {
    this.guardService.toggleLogin();
  }
  hasRoute(route: string) {
    return this.router.url === route;
  }
}
