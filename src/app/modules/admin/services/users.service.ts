import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserResponse } from '../../admin/models/req-resp';
import { map } from 'rxjs/operators';
import { User } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public urlUser: string = "../../assets/fakeData/json/user-list.json";
  constructor(private http: HttpClient) { }

  public getUsers()
  {
    return this.http.get<UserResponse[]>(this.urlUser).pipe(
      map((resp: UserResponse[]) => {
        return resp.map( user => User.profileFromJSON(user))
      })
    );
  }
}
