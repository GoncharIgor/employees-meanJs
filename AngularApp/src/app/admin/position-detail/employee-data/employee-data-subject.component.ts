import {Component, Input, OnInit} from '@angular/core';
import {Subject} from 'rxjs'; // Subj - both observer and observable simultaneously
import {Observable} from 'rxjs';

function getDataFromSubject() {
  const subject = new Subject(); // Subj accumulates data, unlike Observable

  subject.subscribe(
    data => addItem('Observer 1: ' + data),
    err => addItem(err),
    () => addItem('Observer 1 Completed')
  );

  subject.next('The first line has been sent');

  subject.unsubscribe();
}

function getDataFromObservable() {
  const observable = Observable.create((observer) => {
    try {
      observer.next('Employee data retrieved for position');
    } catch (e) {
      observer.error(e);
    }
  });

  observable.subscribe(
    (receivedValue) => addItem(receivedValue),
    (error: any) => addItem(error),
    () => addItem('Completed')
  );

  observable.unsubscribe();
}

@Component({
  selector: 'app-employee-data-subject',
  template: `
    <button class="waves-effect waves-light btn" (click)="subjButtonClicked()">Get Subject Data</button>
    <button class="waves-effect waves-light btn" (click)="observButtonClicked()">Get Observable Data</button>`
})
export class EmployeeDataSubjectComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  subjButtonClicked() {
    return getDataFromSubject();
  }

  observButtonClicked() {
    return getDataFromObservable();
  }
}

function addItem(item: any) {
  const node = document.createElement('p');
  const textNode = document.createTextNode(item);
  node.appendChild(textNode);
  document.body.appendChild(node);
}
