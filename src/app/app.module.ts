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
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input';
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
    MatFormFieldModule,
    FormsModule,
    MatInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
