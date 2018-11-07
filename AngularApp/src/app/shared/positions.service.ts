import {Injectable} from '@angular/core';
import {templateJitUrl} from '@angular/compiler';
import {Position} from './position.model';

@Injectable({
  providedIn: 'root'
})
export class PositionsService {
  positions: Position[] = [{
    _id: 1,
    name: 'Director',
  }, {
    _id: 2,
    name: 'Developer',
  }, {
    _id: 3,
    name: 'QA',
  }];

  constructor() {
  }

  public getPositions() {
    return this.positions;
  }

  public addPosition(position: string) {
    this.positions.push({_id: this.positions.length + 1, name: position});
  }

  searchPosition(position: string) {
    if (!position.trim()) {
      return [];
    }
  }

  getPosition(id: number) {
    return this.positions.find((el) => el._id === id);
  }
}
