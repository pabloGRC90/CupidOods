import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Profile } from 'src/app/modules/profiles/models/profiles';
import { ProfileDataService } from 'src/app/modules/profiles/services/profile-data.service';
import { ProfilesService } from 'src/app/modules/profiles/services/profiles.service';
import { ProfileDetailComponent } from '../profile-detail/profile-detail.component';

@Component({
  selector: 'app-film-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss'],
})
export class ProfileComponent implements OnInit {
  public profiles: Profile[] = [];
  constructor(
    private profilesService: ProfilesService,
    private modal: NgbModal,
    private profileDataService: ProfileDataService
  ) {}

  ngOnInit(): void {
    this.getProfiles();
  }

  public getProfiles() {
    this.profilesService.getProfiles().subscribe((response) => {
      this.profiles = response;
    });
  }

  public mostrar(profile: Profile) {
    this.modal.open(ProfileDetailComponent, { size: 'md' });
    this.profileDataService.profileTrigger.emit(profile);
  }


}
