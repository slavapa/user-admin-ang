import { Component, OnInit } from '@angular/core';
import { UserInfo, UserModel } from 'src/app/models/user-model';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {
  // username = "Slava";
  // email = "slavapas13@gmail.com";

  public currentUser: UserModel;
  

  constructor() {
    this.currentUser = new UserModel(0, 'johndoe', 'johndoe@gmail.com',
      new UserInfo('John', 'Doe', 'Clerk', 'http://authenticgoods.co/wrapbootstrap/themes/sparks/img/team/avatar-male.png'));
   }
   

  ngOnInit(): void {
    console.log('User Container Init');
    
  }

  updateUser(username: string, email: string){
    // this.email = email;
    // this.username = username;
  }


}
