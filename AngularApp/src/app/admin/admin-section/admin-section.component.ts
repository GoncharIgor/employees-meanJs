import {Component, OnInit} from '@angular/core';
import {PositionsService} from '../../shared/positions.service';
import {Location} from '@angular/common';
import {Position} from '../../shared/position.model';

declare var M: any;

@Component({
  selector: 'app-admin-section',
  templateUrl: './admin-section.component.html',
  styleUrls: ['./admin-section.component.less']
})
export class AdminSectionComponent implements OnInit {

  constructor(private positionsService: PositionsService,
              private location: Location) {
  }

  ngOnInit() {
    this.refreshPositionsList();
  }

  refreshPositionsList() {
    this.positionsService.getPositions().subscribe((res) => {
      this.positionsService.positions = res as Position[];
    });
  }

  add(position: string) {
    if (!position) {
      return M.toast({html: `Please enter position name`, classes: 'rounded red lighten-1'});
    }
    position = position.trim();
    this.positionsService.addPosition(position);
    M.toast({html: `${position} position was added`, classes: 'rounded green'});
  }

  goBack(): void {
    this.location.back();
  }
}
