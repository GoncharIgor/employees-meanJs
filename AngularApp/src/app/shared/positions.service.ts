import {Injectable} from '@angular/core';
import {templateJitUrl} from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class PositionsService {
  positions = ['Director', 'Developer', 'QA'];

  constructor() {
  }

  public getPositions() {
    return this.positions;
  }

  public addPosition(position: string) {
    return this.positions.push(position);
  }
}
