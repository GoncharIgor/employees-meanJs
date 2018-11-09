import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.less']
})
export class NavigationPanelComponent implements OnInit {
  logoTitle = 'Employees';

  constructor() {
  }

  ngOnInit() {
  }

}
