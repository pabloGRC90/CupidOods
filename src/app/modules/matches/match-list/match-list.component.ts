import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Match } from 'src/app/modules/matches/models/matches';
import { MatchDataService } from 'src/app/modules/matches/services/match-data.service';
import { MatchesService } from 'src/app/modules/matches/services/matches.service';
import { MatchDetailComponent } from '../match-detail/match-detail.component';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss']
})
export class MatchComponent implements OnInit {
  public matches: Match[] = [];
  constructor(
    private matchesService: MatchesService,
    private modal: NgbModal,
    private matchDataService: MatchDataService
  ) {}

  ngOnInit(): void {
    this.getMatches();
  }

  public getMatches() {
    this.matchesService.getMatches().subscribe((response) => {
      this.matches = response;
    });
  }

  public mostrar(match: Match) {
    this.modal.open(MatchDetailComponent, { size: 'md' });
    this.matchDataService.matchTrigger.emit(match);

  }




}


