import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpaceService {

  constructor(private http: HttpClient) { }

  getUpcominLaunches(limit: number) {
    const url = environment.backUrl + "/2.2.0/launch/upcoming?limit=" + limit;
    return this.http.get(url);
  }

  getUpcominLaunchById(id: string) {
    const url = environment.backUrl + "/2.2.0/launch/upcoming/" + id
    return this.http.get(url);
  }
}
