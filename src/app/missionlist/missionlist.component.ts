import { Component, OnInit } from '@angular/core';
import { Mission } from '../models/mission';
import { SpacexLaunchService } from '../services/spacex-launch.service';
import { Router } from'@angular/router'

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {

  missions = [];
  filteredMissions = []
  selectedMission? : Mission;


  constructor(private router: Router , private spaceService: SpacexLaunchService){}

  ngOnInit(): void {
    this.spaceService.getAllMissions().subscribe({
      next: (res: any) => {
        this.missions = res
        console.log(this.missions)

      },
      complete: () => {
        console.log('complete')
      },
      error: (err:any) => {
        console.log('error: ' + err)
      },
    })
  }

  showDetails(mission: Mission): void{
        this.selectedMission = mission;
        const flightNumber = mission?.flight_number;
        if (flightNumber) {
              this.router.navigate(['/details', flightNumber]);
          }
        console.log(this.selectedMission);
  }

}
