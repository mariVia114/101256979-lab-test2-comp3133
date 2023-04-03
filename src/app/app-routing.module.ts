import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';
import { MissionlistComponent } from './missionlist/missionlist.component';

const routes: Routes = [
  { path: '', component: MissionlistComponent},
  { path: 'details/:flight_number', component: MissiondetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }