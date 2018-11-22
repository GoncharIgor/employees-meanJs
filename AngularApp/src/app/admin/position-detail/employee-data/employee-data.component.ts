import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

const observable = Observable.create((observer) => {
  try {
    observer.next('Employee data retrieved for position: '); // next: returns value
    observer.next('Second line : ');
    setInterval(() => {
      observer.next('I am good ');
    }, 2000);
    /* observer.complete();
     observer.next('This line wont be sent');*/
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
    const observer = observable.subscribe(
      (receivedValue) => {
        return this.addItem(receivedValue + this.position);
      },
      (error: any) => this.addItem(error),
      () => this.addItem('Completed') // calls if observer.complete() function is triggered above
    );

    setTimeout(() => {
      observer.unsubscribe();
    }, 6001);
  }

  addItem(item: string) {
    const node = document.createElement('p');
    const textNode = document.createTextNode(item);
    node.appendChild(textNode);
    document.body.appendChild(node);
  }
}
