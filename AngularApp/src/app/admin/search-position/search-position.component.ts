import {Component, Input, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {PositionsService} from '../../shared/positions.service';

@Component({
  selector: 'app-search-position',
  templateUrl: './search-position.component.html',
  styleUrls: ['./search-position.component.less']
})
export class SearchPositionComponent implements OnInit {
  @Input() positions: { _id: number; name: string }[];
  // private searchTerms = new Subject<string>();

  constructor() {
  }

  ngOnInit() {
  }

  search(term: string) {
    this.positions = [{_id: 1, name: 'Director'}];
  }
}
