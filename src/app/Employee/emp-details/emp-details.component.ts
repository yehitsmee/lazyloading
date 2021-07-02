import { Component, OnInit } from '@angular/core';
import { Employee } from '../../Employee/emp';
import { EmployeeService } from '../../Employee/employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {
  emps: Employee[] = [];

  constructor(
    private empService: EmployeeService,
    private _route: ActivatedRoute
  ) {
    this.emps = this._route.snapshot.data['employeeList'];
  }

  ngOnInit() {
    // this.empService.getData().subscribe(data => {
    //   this.emps = data;
    // });
  }
  delEmp(e: Employee) {
    this.empService
      .deleteData(e)
      .subscribe(() => (this.emps = this.emps.filter(t => t.id !== e.id)));
  }
}
