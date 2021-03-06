import { Component, OnInit } from '@angular/core';
import {IUserForm, UserModel} from "./../../models/user-model"
import {UsersService} from './../users.service';
import {ActivatedRoute, Router} from '@angular/router';
import { map, filter, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-user-edit-container',
  templateUrl: './user-edit-container.component.html',
  styleUrls: ['./user-edit-container.component.css']
})
export class UserEditContainerComponent implements OnInit {
  currentUser: UserModel | undefined;

  constructor(private service: UsersService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this.route.params.pipe(
      map(params => {
        return params['id']
      })).pipe(switchMap(id => this.service.getUser(id)))
      .subscribe(user => {
        this.currentUser = user;
      });
  }

  updateUser(user: IUserForm){

    this.service.updateUser(Object.assign({}, this.currentUser, user))
      .subscribe(user => this.navigateToUsers())
  }
  
  deleteUser(user: UserModel){
    this.service.deletedUser(user.id)
      .subscribe(user => this.navigateToUsers());

  }
  navigateToUsers(){
    this.router.navigate(['/users']);
  }
}
