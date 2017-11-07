import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTableModule } from 'angular-4-data-table-bootstrap-4';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashComponent } from './dashboard/dash.component';
import { SettingComponent } from './setting/setting.component';
import { NetComponent } from './netmanager/net.component';
import { DiskComponent } from './diskmanager/disk.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTableModule
  ],
  declarations: [
    AppComponent,
    DashComponent,
    SettingComponent,
    NetComponent,
    DiskComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
