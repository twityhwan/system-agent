import { Component } from '@angular/core';

import { NetComponent } from './netmanager/net.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'System Agent';
  sidemenus = ['Network', 'Disk'];
}
