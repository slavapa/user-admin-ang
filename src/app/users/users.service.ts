import { Injectable } from '@angular/core';
import {IUserForm, UserInfo, UserModel} from './../models/user-model';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';



@Injectable()
export class UsersService {

  private users: UserModel[];

  private baseUrl = 'http://localhost:3000';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});


  constructor(private http: HttpClient) {
    this.users =  [
      new UserModel(-1, '-1', '-1',
        new UserInfo('-1', '-1', '-1', '-1')
      ),
      // new UserModel(1, 'janedoe', 'janedoe@gmail.com',
      //   new UserInfo('Jane', 'Doe', 'Developer', 'http://brandonmathis.com/projects/fancy-avatars/demo/images/avatar_female_dark_on_clear_200x200.png')
      // ),
      // new UserModel(2, 'johnsmith', 'johnsmith@gmail.com',
      //   new UserInfo('John', 'Smith', 'Sales', 'http://authenticgoods.co/wrapbootstrap/themes/sparks/img/team/avatar-male.png')
      // ),
      // new UserModel(3, 'janesmith', 'janesmith@gmail.com',
      //   new UserInfo('Jane', 'DBA', 'Developer', 'http://brandonmathis.com/projects/fancy-avatars/demo/images/avatar_female_dark_on_clear_200x200.png')
      // ),
    ]
  }

  getUsersSync(): UserModel[]{
    return this.users;
  }
  
  getUsers(): Observable<UserModel[]>{
    return this.http.get<UserModel[]>(`${this.baseUrl}/users`);
  }

  getUser(id: number): Observable<UserModel>{
    return this.http.get<UserModel>(`${this.baseUrl}/users/${id}`);
  }

  updateUserSync(user: UserModel){
    const inx = this.users.findIndex(u => u.id === user.id);
    let updatedUser;
    if (inx >= 0){
      updatedUser = this.users[inx];
      updatedUser.username = user.username;
      updatedUser.email = user.email;
    }

    return updatedUser;
  }

  updateUser(user: IUserForm): Observable<UserModel>{
    return this.http.put<UserModel>(`${this.baseUrl}/users/${user.id}`, JSON.stringify(user),
      {headers: this.headers});
  }

  deletedUserSync(userId: number): boolean{
    const prevLength = this.users.length;
    this.users = this.users.filter(user => user.id !== userId);

    return prevLength !== this.users.length;
  }

  deletedUser(userId: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/users/${userId}`);

  }
  
  createUser(user: UserModel): Observable<UserModel>{
    return this.http.post<UserModel>(`${this.baseUrl}/users`, JSON.stringify(user), {headers: this.headers});

  }


}