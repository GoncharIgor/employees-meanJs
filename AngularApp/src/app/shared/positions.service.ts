import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';
import {Position} from './position.model';
import {POSITIONS} from '../mocks/mock-positions';

@Injectable({
  providedIn: 'root'
})
export class PositionsService {
  positions: Position[] = POSITIONS;

  constructor() {
  }

  public getPositions(): Observable<Position[]> {
    return of(this.positions);
  }

  public addPosition(position: string) {
    this.positions.push({_id: this.positions.length + 1, name: position});
  }

  searchPosition(position: string) {
    if (!position.trim()) {
      return [];
    }
  }

  getPosition(id: number): Observable<Position> {
    return of(this.positions.find((el) => el._id === id));
  }
}
