import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/modules/admin/models/users';
import { UserDataService } from 'src/app/modules/admin/services/user-data.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  public user: User | undefined;

  constructor(private modalActive: NgbActiveModal, private userDataService: UserDataService) {
    this.userDataService.userTrigger.subscribe((data: User) =>{
      this.user = data;
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
  activaUser(){
    alert("Usuario Activado");
  };
  desactivaUser(){
    alert("Usuario Desactivado");
  };
  addAdminRol(){
    alert("Añadido Rol de Administrador");
  };
  removeAdminRol(){
    alert("Eliminado Rol de Administrador");
  };
  blockUser(){
    alert("Usuario Bloqueado");
    this.modalActive.dismiss();
  };

}
