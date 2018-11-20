import {Component, Input, OnInit} from '@angular/core';


import {Observable} from 'rxjs';

const observable = Observable.create((observer) => {
  try {
    observer.next('Employee data retrieved for position: '); // next: returns value
    observer.next('Second line : ');
    observer.complete();
    observer.next('This line wont be sent');
  } catch (e) {
    observer.error(e);
  }
});


@Component({
  selector: 'app-employee-data',
  template: '<button class="waves-effect waves-light btn" (click)="getEmployeeData()">Get Data</button>'
})
export class EmployeeDataComponent implements OnInit {
  @Input() position: string;

  constructor() {
  }

  ngOnInit() {
  }

  getEmployeeData() {
    observable.subscribe(
      (receivedValue) => {
        return this.addItem(receivedValue + this.position);
      },
      (error: any) => this.addItem(error),
      () => this.addItem('Completed')
    );
  }

  addItem(item: string) {
    const node = document.createElement('p');
    const textNode = document.createTextNode(item);
    node.appendChild(textNode);
    document.body.appendChild(node);
  }

}
