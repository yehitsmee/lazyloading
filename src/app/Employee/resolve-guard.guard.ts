import { Injectable } from '@angular/core';
import {
  CanActivate,
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../Employee/emp';
import { EmployeeService } from '../Employee/employee.service';

@Injectable()
export class ResolveGuard implements Resolve<Employee[]> {
  constructor(private empService: EmployeeService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return this.empService.getData();
  }
}
