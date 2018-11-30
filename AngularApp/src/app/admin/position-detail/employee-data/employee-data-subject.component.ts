import {Component, Input, OnInit} from '@angular/core';
import {Subject, BehaviorSubject, ReplaySubject, AsyncSubject} from 'rxjs'; // Subj - both observer and observable simultaneously
import {Observable} from 'rxjs';

function getDataFromSubject() {
  // const subject = new Subject();
  // const subject = new BehaviorSubject('First'); // initial value
  const subject = new ReplaySubject(2); // number of values to be given to the next observer

  subject.subscribe(
    data => addItem('Observer 1: ' + data),
    err => addItem(err),
    () => addItem('Observer 1 Completed')
  );

  subject.next('The first line has been sent');
  subject.next('The another line has been sent');
  subject.next('Observer 2 is going to subscribe');
  // if it is a Behavior subj, then this line (last event) will be passed to next observer

  const observer2 = subject.subscribe(
    (data) => addItem('Observer 2: ' + data)
  );

  subject.next('The second line has been sent'); // will return at observ 1 and observ2, then second line per observ
  subject.next('The third line has been sent');

  observer2.unsubscribe();
  subject.next('Final line has been sent');
  subject.unsubscribe();
}

@Component({
  selector: 'app-employee-data-subject',
  template: '<button class="waves-effect waves-light btn" (click)="subjButtonClicked()">Get Subject Data</button>'
})
export class EmployeeDataSubjectComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  subjButtonClicked() {
    return getDataFromSubject();
  }
}

function addItem(item: any) {
  const node = document.createElement('p');
  const textNode = document.createTextNode(item);
  node.appendChild(textNode);
  document.body.appendChild(node);
}
