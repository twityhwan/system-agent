import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NetComponent } from './netmanager/net.component';
import { DiskComponent } from './diskmanager/disk.component';

const routes: Routes = [
  { path: '', redirectTo: '/netmanager', pathMatch: 'full' },
  { path: 'netmanager', component: NetComponent },
  { path: 'diskmanager', component: DiskComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
