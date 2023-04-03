import { Component, OnInit } from '@angular/core';
import { Mission } from '../models/mission';
import { SpacexLaunchService } from '../services/spacex-launch.service';


@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {

  missions = [];

  constructor(private spaceService: SpacexLaunchService){}

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

}
