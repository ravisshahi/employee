import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Employee Detail Information :-';
  showAddEmployee: boolean =false;
  subscription ?: Subscription;


  constructor(private uiService: UiService,
              private router:Router) { 
              this.subscription = this.uiService.ontoggle()
                                      .subscribe((value)=>(this.showAddEmployee = value));
  }

  ngOnInit(): void {
  }

  toggleEmployee(){
    console.log("toggle is working");
    this.uiService.toogleAddEmployee();
  }

  hasRoute(route: string)
  {
    return this.router.url === route;
  }

}
