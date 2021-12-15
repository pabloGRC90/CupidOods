import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../models/profiles';
import { ProfileResponse } from '../models/req-resp';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  public urlProfile: string = "../../assets/fakeData/json/user-list-XX-XY.json";
  // public urlProfile: string = "../../assets/fakeData/json/user-list-XY-XX.json";
  constructor(private http: HttpClient) { }

  public getProfiles()
  {
    return this.http.get<ProfileResponse[]>(this.urlProfile).pipe(
      map((resp: ProfileResponse[]) => {
        return resp.map( profile => Profile.profileFromJSON(profile))
      })
    );
  }
}
