import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Profile } from 'src/app/modules/profiles/models/profiles';
import { ProfileDataService } from 'src/app/modules/profiles/services/profile-data.service';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss']
})
export class ProfileDetailComponent implements OnInit {

  public profile: Profile | undefined;

  constructor(private modalActive: NgbActiveModal, private profileDataService: ProfileDataService) {
    this.profileDataService.profileTrigger.subscribe((data: Profile) =>{
      this.profile = data;
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

  like() {
    alert("Like");
    this.modalActive.dismiss();
  }

  dislike() {
    alert("Dislike");
    this.modalActive.dismiss();
  }



}
