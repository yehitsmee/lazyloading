import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../Employee/emp';
import { Observable } from 'rxjs';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json'
//   })
// };

@Injectable()
export class EmployeeService {
  private url =
    'https://my-json-server.typicode.com/malikromir/database/employees';
      // private url = '../../assets/db.json';
  // empList: Employee[] = [
  //   { id: 1, name: 'John Doe', role: 'SDE' },
  //   {
  //     id: 2,
  //     name: 'Joe Root',
  //     role: 'DevOps'
  //   }
  // ];
  constructor(private http: HttpClient) {}
  // getEmp() {
  //   return this.empList;
  // }
  getData(): Observable<any> {
    return this.http.get<Employee[]>(this.url);
  }
  deleteData(emp: Employee): Observable<Employee> {
    const delUrl = `${this.url}/${emp.id}`;
    return this.http.delete<Employee>(delUrl);
  }
}
