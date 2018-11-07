import {Component, OnInit} from '@angular/core';
import {PositionsService} from '../shared/positions.service';

declare var M: any;

@Component({
  selector: 'app-admin-section',
  templateUrl: './admin-section.component.html',
  styleUrls: ['./admin-section.component.less']
})
export class AdminSectionComponent implements OnInit {

  constructor(private positionsService: PositionsService) {
  }

  ngOnInit() {
    this.refreshPositionsList();
  }

  refreshPositionsList() {
    this.positionsService.positions = this.positionsService.getPositions();
  }

  add(position: string) {
    position = position.trim();
    this.positionsService.addPosition(position);
    M.toast({html: `${position} position was added`, classes: 'rounded green'});
  }

}
