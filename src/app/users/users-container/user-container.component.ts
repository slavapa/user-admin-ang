import { Component, OnInit } from '@angular/core';
import { UserInfo, UserModel } from 'src/app/models/user-model';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {
  // username = "Slava";
  // email = "slavapas13@gmail.com";

  // username = "Slava";
  // email = "slavapas13@gmail.com";
  currentUser!: UserModel;
  users: UserModel[] = [];
  

  constructor(private service: UsersService) {
    // this.currentUser = new UserModel(-1, '-1', '-1',
    //   new UserInfo('-1', '-1', '-1', '-1'));
   }
   

   updateUser(user: UserModel){

    if (this.service.updateUser(user)){
      this.getUsers();
    }

}

deleteUser(user: UserModel){
  if (this.service.deletedUser(user.id)){
    this.getUsers();
  }
}
private getUsers(){
  this.users = this.service.getUsers();
}
ngOnInit() {
  console.log('User Container Init');

  this.getUsers();
}

onItemClicked(user: UserModel){
  this.currentUser = user;
}


}
