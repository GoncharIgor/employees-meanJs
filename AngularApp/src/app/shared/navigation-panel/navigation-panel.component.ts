import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../employee.service';
import {Employee} from '../employee.model';

@Component({
  selector: 'app-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.less']
})
export class NavigationPanelComponent implements OnInit {
  logoTitle = 'Employees';
  numberOfEmployees: number;

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.employeeService.getEmployeeList().subscribe((res) => {
      const emps = res as Employee[];
      this.numberOfEmployees = emps.length;
    });
  }

}
