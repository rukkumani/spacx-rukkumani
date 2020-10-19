import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { SpacXlaunchComponent } from './layout/spac-xlaunch/spac-xlaunch.component';
import { FilteredSpacXlaunchComponent } from './layout/filtered-spac-xlaunch/filtered-spac-xlaunch.component';

@NgModule({
  declarations: [
    AppComponent,
    SpacXlaunchComponent,
    FilteredSpacXlaunchComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
