import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Employee } from 'src/app/employee';
import { UiService } from 'src/app/services/ui.service'; 
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  @Output() onAddEmployee : EventEmitter<Employee> = new EventEmitter;

  name : string = '';
  email: string='';
  phoneno:number = 0;
  profession : string ='';
  project : boolean = false;
  showAddEmployee ?: boolean;
  subscription : Subscription;

  constructor(private uiService : UiService) {
    this.subscription = this.uiService.ontoggle().subscribe((value)=>(this.showAddEmployee = value));
   }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.name){
      alert('pls add employee name');
      return ;
    }

    const NewEmployee = {
      name : this.name,
      email: this.email,
      phoneno:this.phoneno,
      profession : this.profession,
      Project: this.project
    }

    this.onAddEmployee.emit(NewEmployee)

    this.name = '';
    this.email='';
    this.phoneno=0;
    this.profession = '';
    this.project = false;
  }

}