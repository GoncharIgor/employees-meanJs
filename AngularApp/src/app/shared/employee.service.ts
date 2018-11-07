import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

import {Employee} from './employee.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class EmployeeService {
  selectedEmployee: Employee;
  employees: Employee[];
  readonly baseURL = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) {
  }

  public postEmployee(emp: Employee) {
    return this.http.post(this.baseURL, emp).pipe(
      catchError(this.handleError('postEmployee', []))
      // catchError() intercepts an Observable that failed. It passes the error an error handler
    );
  }

  public getEmployeeList() {
    return this.http.get(this.baseURL);
    // return this.http.get<Employee[]>(this.baseURL);
    // HttpClient.get returns the body of the response as an untyped JSON object by default
    // Applying the optional type specifier, <Employee[]> , gives you a typed result object
  }

  public putEmployee(emp: Employee) {
    return this.http.put(`${this.baseURL}/${emp._id}`, emp, httpOptions);
  }

  public deleteEmployee(_id: string) {
    return this.http.delete(`${this.baseURL}/${_id}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
