import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {fromEvent} from 'rxjs';

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

const eventObservable = fromEvent(document, 'mousemove');

@Component({
  selector: 'app-employee-data',
  template: `
    <button class="waves-effect waves-light btn" (click)="getEmployeeData()">Get Data</button>
    <button class="waves-effect waves-light btn" (click)="getDatafromMounseMoveObservable()">Get Data from Event
    </button>`
})
export class EmployeeDataComponent implements OnInit {
  @Input() position: string;

  constructor() {
  }

  ngOnInit() {
  }

  getEmployeeData() {
    const observer = observable.subscribe(
      (receivedValue) => this.addItem(receivedValue + this.position),
      (error: any) => this.addItem(error),
      () => this.addItem('Completed') // calls if observer.complete() function is triggered above
    );

    // we can get data from 1 observer at same time
    const observer2 = observable.subscribe(
      (receivedValue: any) => this.addItem('[Observer 2] ' + receivedValue + this.position)
    );

    // to unsubscribe both of observers below
    observer.add(observer2);

    setTimeout(() => {
      observer.unsubscribe();
    }, 6001);
  }

  getDatafromMounseMoveObservable() {
    const subscription = eventObservable.subscribe((item) => {
      return this.addItem(item);
    });

    setTimeout(() => {
      subscription.unsubscribe();
    }, 2000);
  }

  addItem(item: any) {
    const node = document.createElement('p');
    const textNode = document.createTextNode(item);
    node.appendChild(textNode);
    document.body.appendChild(node);
  }
}
