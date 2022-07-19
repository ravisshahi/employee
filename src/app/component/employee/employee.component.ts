import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/employee'; 
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee: Employee[] = [];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployee().subscribe((Employee) => (this.employee = Employee
      ));
  }
  deleteEmployee(employee: Employee ) {
    this.employeeService.deleteEmployee(employee).subscribe(() => (
        this.employee = this.employee.filter(e =>e.id !== employee.id)
        ));
    }
  onToggleProject(employee: Employee)
  {
    employee.Project = !employee.Project;
    this.employeeService
      .updateEmployeeProject(employee)
      .subscribe()
  }

  onAddEmployee(employee: Employee)
  {
    this.employeeService
      .addEmployee(employee)
      .subscribe((employee) => (this.employee.push(employee)))
  }

}
