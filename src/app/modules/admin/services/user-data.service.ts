import { Injectable, Output, EventEmitter } from '@angular/core';
import { User } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  @Output()userTrigger: EventEmitter<User> = new EventEmitter();
  constructor() { }
}
