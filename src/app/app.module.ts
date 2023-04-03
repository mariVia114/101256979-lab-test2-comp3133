import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { AppRoutingModule } from './app-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  
  declarations: [
    AppComponent,
    MissionlistComponent,
    MissiondetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    MatDividerModule,
    RouterModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
