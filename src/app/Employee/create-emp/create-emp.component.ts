import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../../Employee/emp'
import { EmployeeService } from '../../Employee/employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-emp',
  templateUrl: './create-emp.component.html',
  styleUrls: ['./create-emp.component.css']
})
export class CreateEmpComponent {
  emps: Employee[] = [];

  
  constructor(private http: HttpClient) {}

  onSubmit(data) {
    this.http
      .post(
        'https://my-json-server.typicode.com/malikromir/database/employees',
        data
      )
      .subscribe((result) => {
        console.warn('result', result);
      });
    console.warn(data);
  }

  name: String = '';
  title: String = 'Create Employee';
  role: String = '';
}
