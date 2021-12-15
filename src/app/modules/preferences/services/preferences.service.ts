import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PreferenceResponse } from '../../preferences/models/req-resp';
import { map } from 'rxjs/operators';
import { Preference } from '../models/preferences';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {

  public urlPreference: string = "../../assets/fakeData/json/user-preferences.json";

  constructor(private http: HttpClient) { }

  public getPreferences()
  {
    return this.http.get<PreferenceResponse[]>(this.urlPreference).pipe(
      map((resp: PreferenceResponse[]) => {
        return resp.map( preference => Preference.preferenceFromJSON(preference))
      })
    );
  }
}
