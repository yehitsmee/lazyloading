import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Resolve
} from '@angular/router';
import { Observable } from 'rxjs';
import { GuardService } from './guard.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private guardService: GuardService) {}
  canActivate(): boolean {
    if (this.guardService.loggedIn()) {
      return true;
    } else {
      return false;
    }
  }
}
