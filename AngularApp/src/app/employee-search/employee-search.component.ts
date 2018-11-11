import {Component, OnInit} from '@angular/core';
import {Employee} from '../shared/employee.model';
import {Observable, Subject} from 'rxjs/index';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/internal/operators';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.less']
})
export class EmployeeSearchComponent implements OnInit {
  employees$: Observable<Employee[]>;
  private searchTerms = new Subject<string>();

  constructor() {
  }

  ngOnInit() {
    // this.employees$ = this.searchTerms.pipe(
    //   // wait 300ms after each keystroke before considering the term
    //   distinctUntilChanged(),
    //
    //   // ignore new term if same as previous term
    //   debounceTime(300),
    //
    //   // switch to new search observable each time the term changes
    //   switchMap((term: string) => this.heroService.searchHeroes(term)),
    // );
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

}
