import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { NetComponent } from './netmanager/net.component';
import { DiskComponent } from './diskmanager/disk.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'System Agent';
  sidemenus = ['Network', 'Disk'];
  selectedMenu: string;
  routerMap = {
      'Network': '/netmanager',
      'Disk': 'diskmanager'
  };

  constructor(private router: Router) {
    this.selectedMenu = this.sidemenus[0];
  }

  onClick(menu: string): void {
    this.selectedMenu = menu;
    this.router.navigate([this.routerMap[menu]]);
  }
}
