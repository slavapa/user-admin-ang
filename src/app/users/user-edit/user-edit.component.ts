import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserInfo, UserModel} from './../../models/user-model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  @Input()
  user: UserModel;

  @Output()
  onUserUpdated: EventEmitter<UserModel> = new EventEmitter()

  @Output()
  onUserDeleted: EventEmitter<UserModel> = new EventEmitter()

  constructor() {
    this.user = new UserModel(
      -1, '', '', 
      new UserInfo('', '', '', ''));
   }

  ngOnInit(): void {
  }

  onSaveClicked(username: string, email: string){
    let userId = this.user?this.user.id: -1;
    this.onUserUpdated.emit(new UserModel(userId, username, email));
  }
  
  onDeleteClicked(user: UserModel){
    this.onUserDeleted.emit(user);
  }

}
