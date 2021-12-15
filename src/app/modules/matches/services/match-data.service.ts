import { Injectable, Output, EventEmitter } from '@angular/core';
import { Match } from '../models/matches';

@Injectable({
  providedIn: 'root'
})
export class MatchDataService {
  @Output()matchTrigger: EventEmitter<Match> = new EventEmitter();


  constructor() { }
}
