import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmpComponent } from '../Employee/create-emp/create-emp.component';
import { EmpDetailsComponent } from '../Employee/emp-details/emp-details.component';
import { ResolveGuard } from '../Employee/resolve-guard.guard';
const routes: Routes = [
  {
    path: '',
    component: EmpDetailsComponent,
    resolve: { employeeList: ResolveGuard }
  },
  { path: 'create', component: CreateEmpComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule {}
