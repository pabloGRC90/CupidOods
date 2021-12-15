import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Match } from '../models/matches';
import { MatchResponse } from '../models/req-resp';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  public urlMatch: string = "../../assets/fakeData/json/user-list-XX-XY-match.json";
  // public urlMatch: string = "../../assets/fakeData/json/user-list-XY-XX-match.json";
  constructor(private http: HttpClient) { }

  public getMatches()
  {
    return this.http.get<MatchResponse[]>(this.urlMatch).pipe(
      map((resp: MatchResponse[]) => {
        return resp.map( match => Match.matchFromJSON(match))
      })
    );
  }
}
