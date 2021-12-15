import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/modules/admin/models/users';
import { UserDataService } from 'src/app/modules/admin/services/user-data.service';
import { UsersService } from 'src/app/modules/admin/services/users.service';
import { UserDetailComponent } from '../user-detail/user-detail.component';

@Component({
  selector: 'app-form-admin',
  templateUrl: './form-admin.component.html',
  styleUrls: ['./form-admin.component.scss']
})
export class FormAdminComponent implements OnInit {
  public users: User[] = [];

  constructor(
    private usersService: UsersService,
    private modal: NgbModal,
    private userDataService: UserDataService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  public getUsers() {
    this.usersService.getUsers().subscribe((response) => {
      this.users = response;
    });
  }

  public mostrar(user: User) {
    this.modal.open(UserDetailComponent, { size: 'md' });
    this.userDataService.userTrigger.emit(user);
  }

}
