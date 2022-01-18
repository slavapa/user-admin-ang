import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {AppRouting} from './app.routing';
import {UsersModule} from './users/users.module';
import { UserNewContainerComponent } from './users/user-new-container/user-new-container.component';
import {UserFormComponent} from './users/user-form/user-form.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import {UserContainerComponent} from './users/users-container/user-container.component';
import {UsersService} from './users/users.service';
import {UsersRouting} from './users/users.routing';
import { UserEditContainerComponent } from './users/user-edit-container/user-edit-container.component';
import {SharedModule} from './shared/shared.module';
import { UserFormReactiveComponent } from './users/user-form-reactive/user-form-reactive.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule, 
    UsersRouting,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    UsersModule,
    AppRouting,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    UserNewContainerComponent
  ],
  providers: [UsersService],
  bootstrap: [AppComponent],
  exports: [UserContainerComponent],
})
export class AppModule { }
