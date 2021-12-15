import { Injectable, Output, EventEmitter } from '@angular/core';
import { Profile } from '../models/profiles';

@Injectable({
  providedIn: 'root'
})
export class ProfileDataService {
  @Output()profileTrigger: EventEmitter<Profile> = new EventEmitter();
  constructor() { }
}
