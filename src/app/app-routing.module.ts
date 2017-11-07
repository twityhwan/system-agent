import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashComponent } from './dashboard/dash.component';
import { SettingComponent } from './setting/setting.component';
import { NetComponent } from './netmanager/net.component';
import { DiskComponent } from './diskmanager/disk.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'netmanager', component: NetComponent },
  { path: 'diskmanager', component: DiskComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
