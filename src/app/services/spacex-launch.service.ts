import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, retry } from 'rxjs';
import { Mission } from '../models/mission'

@Injectable({
  providedIn: 'root'
})
export class SpacexLaunchService {
  private apiURL = 'https://api.spacexdata.com/v3/launches';
  constructor(private http: HttpClient) { }

  public getAllMissions(): Observable<any>{
    return this.http.get(<any>this.apiURL);
  }

  public getLaunchesByYear(launchYear: number): Observable<Mission[]> {
    return this.http.get<Mission[]>(`${this.apiURL}?launch_year=${launchYear}`);
  }

  getMissionByFlightNumber(flightNumber: string) {
  return this.http.get(`https://api.spacexdata.com/v3/launches/${flightNumber}`);
}
}
