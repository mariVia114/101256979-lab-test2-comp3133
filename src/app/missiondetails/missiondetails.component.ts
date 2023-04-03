import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpacexLaunchService } from '../services/spacex-launch.service';



@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent{
@Input() mission: any;

    constructor(private route: ActivatedRoute, private spaceApi: SpacexLaunchService){}
    ngOnInit(){
      const flightNumber = this.route.snapshot.paramMap.get('flight_number');
      this.spaceApi.getMissionByFlightNumber(flightNumber!).subscribe((data: any) => {
      this.mission = data;
    });
    }
}
