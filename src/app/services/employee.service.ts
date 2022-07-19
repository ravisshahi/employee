import { Injectable } from '@angular/core';
import { Employee } from '../employee'; 
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { EMPLOYEE } from '../employee-item';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = "http://localhost:4201/emplyoee";
  constructor(private http: HttpClient) { }

  getEmployee(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.apiUrl)
  }

  deleteEmployee(employee: Employee): Observable<Employee>{
    const url=`${this.apiUrl}/${employee.id}`;
    return this.http.delete<Employee>(url);
  }
  updateEmployeeProject(employee:Employee): Observable<Employee>
  {
    const url = `${this.apiUrl}/${employee.id}`;
    return this.http.put<Employee>(url,employee,httpOptions);
  }

  addEmployee(employee: Employee): Observable<Employee>
  {
    return this.http.post<Employee>(this.apiUrl,employee,httpOptions);
  }
}
