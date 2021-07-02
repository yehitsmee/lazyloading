import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from '../Employee/employee-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { EmpDetailsComponent } from '../Employee/emp-details/emp-details.component';
import { EmployeeService } from './employee.service';
import { CreateEmpComponent } from './create-emp/create-emp.component';
import { ResolveGuard } from '../Employee/resolve-guard.guard';
import{ FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
  ],
  declarations: [EmpDetailsComponent, CreateEmpComponent],
  providers: [EmployeeService, ResolveGuard],
  exports: [EmpDetailsComponent, CreateEmpComponent]
})
export class EmployeeModule {}
