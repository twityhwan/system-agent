import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NetComponent } from './netmanager/net.component';
import { DiskComponent } from './diskmanager/disk.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    NetComponent,
    DiskComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
