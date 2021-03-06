import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

import {EmployeeService} from '../../shared/employee.service';
import {Employee} from '../../shared/employee.model';

declare var M: any;

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.less'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService) {
    // if I want to use service methods or properties directly from template, it has to be public???
  }

  ngOnInit() {
    this.resetForm();
    this.refreshEmployeeList();
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    }
    this.employeeService.selectedEmployee = {
      _id: '',
      avatar: '',
      name: '',
      position: '',
      office: '',
      salary: null
    };
  }

  onSubmit(form: NgForm) {
    if (form.value._id === '' || form.value._id === null) {
      this.employeeService.postEmployee(form.value).subscribe((res) => {
        if (this.checkObjectIsEmpty(res)) {
          this.updateFormAndResetPage(form);
          return M.toast({html: 'Incorrect new data was entered', classes: 'rounded red lighten-1'});
        }
        this.updateFormAndResetPage(form);
        M.toast({html: 'Saved successfully', classes: 'rounded green'});
      });
    } else {
      this.employeeService.putEmployee(form.value).subscribe((res) => {
        this.updateFormAndResetPage(form);
        M.toast({html: 'Updated successfully', classes: 'rounded green'});
      });
    }
  }

  refreshEmployeeList() {
    this.employeeService.getEmployeeList().subscribe((res) => {
      this.employeeService.employees = res as Employee[];
    });
  }

  onEdit(emp: Employee) {
    this.employeeService.selectedEmployee = emp;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure you want to delete Employee') === true) {
      this.employeeService.deleteEmployee(_id).subscribe((res) => {
        this.refreshEmployeeList();
        this.resetForm(form);
        M.toast({html: 'Deleted successfully', classes: 'rounded green'});
      });
    }
  }

  private checkObjectIsEmpty(obj: Object): boolean {
    return Object.keys(obj).length === 0;
  }

  private updateFormAndResetPage(form: NgForm) {
    this.resetForm(form);
    this.refreshEmployeeList();
  }
}
