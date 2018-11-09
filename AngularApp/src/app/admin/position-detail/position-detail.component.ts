import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {PositionsService} from '../../shared/positions.service';
import {Position} from '../../shared/position.model';

@Component({
  selector: 'app-position-detail',
  templateUrl: './position-detail.component.html',
  styleUrls: ['./position-detail.component.less']
})
export class PositionDetailComponent implements OnInit {
  position: Position;

  constructor(private route: ActivatedRoute,
              private positionsService: PositionsService,
              private location: Location
  ) {
  }

  ngOnInit() {
    this.getPosition();
  }

  getPosition() {
    const id = +this.route.snapshot.paramMap.get('id');
    return this.positionsService.getPosition(id).subscribe((res) => {
      this.position = res as Position;
    });
  }
}
