import { Component, Input, OnInit } from '@angular/core';
import { Mission } from '../models/mission';



@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent{
@Input() mission?: Mission;
  
}