import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Match } from 'src/app/modules/matches/models/matches';
import { MatchDataService } from 'src/app/modules/matches/services/match-data.service';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.scss']
})
export class MatchDetailComponent implements OnInit {

  public match: Match | undefined;

  constructor(private modalActive: NgbActiveModal, private matchDataService: MatchDataService) {
    this.matchDataService.matchTrigger.subscribe((data: Match) =>{
      this.match = data;
    })
   }

  ngOnInit(): void {
  }

  closeModal(){
    this.modalActive.dismiss();
  }

  sendMessage(){
    alert("redireccionar a enviar mensaje");
  }

  blockUser(){
    alert("Usuario Bloqueado");
    this.modalActive.dismiss();
  };


}
