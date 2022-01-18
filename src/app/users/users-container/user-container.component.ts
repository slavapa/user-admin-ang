import { Component, OnInit } from '@angular/core';
import { IUserForm, UserInfo, UserModel } from 'src/app/models/user-model';
import {UsersService} from '../users.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';


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
  // users!: UserModel[];
  // myUser:  UserModel[] | undefined
  users$!: Observable<UserModel[]>;
  

  constructor(private service: UsersService, private router: Router) {
    // this.currentUser = new UserModel(-1, '-1', '-1',
    //   new UserInfo('-1', '-1', '-1', '-1'));
   }
   

   updateUser(user: IUserForm){
    // if (this.service.updateUser(user)){
    //   this.getUsers();
    // }
    this.service.updateUser(Object.assign({}, this.currentUser, user))
    .subscribe((user) => {
      this.getUsers();
    })

}

deleteUser(user: UserModel){
  this.service.deletedUser(user.id)
  .subscribe((data) => {
  console.log(data);
    this.getUsers();
  })
  // if (this.service.deletedUser(user.id)){
  //   this.getUsers();
  // }
}

// private getUsersSync(){
//   this.users = this.service.getUsersSync();
// }

private getUsers(){
  // this.service.getUsers()
  //     .subscribe(users => this.users = users);
  this.users$ = this.service.getUsers();
}

ngOnInit() {
  console.log('User Container Init');

  this.getUsers();
}

onItemClicked(user: UserModel){
  // this.currentUser = user;
  this.router.navigate(['/users', user.id]);
}


}
