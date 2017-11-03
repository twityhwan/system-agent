import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NetComponent } from './netmanager/net.component';

const routes: Routes = [
  { path: '', redirectTo: '/netmanager', pathMatch: 'full' },
  { path: 'netmanager', component: NetComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
